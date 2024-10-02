import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { OfficesDocument } from '../../prismicio-types';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';
import WebsiteLoading from '@/app/internal/website/(components)/WebsiteLoading';
import { getAllOffices } from '@/prismic/office.prismic';

interface AppContextType {
    user: User | null;
    offices: OfficesDocument[];
    loading: boolean;
    setAppState: (newState: Partial<AppContextType>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<Omit<AppContextType, 'setAppState'>>({
        user: null,
        offices: [],
        loading: true,
    });

    const setAppState = (newState: Partial<AppContextType>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    useEffect(() => {
        (async () => {
            try {
                const offices = await getAllOffices();
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        console.log("Current user:", user);
                        setAppState({ user, offices, loading: false });

                    } else {
                        console.log("No user signed in");
                        setAppState({ loading: false })
                    }
                });
            } catch (error) {
                console.log('OFFICE ROLE:::', error);
            }
        })();
    },[])

    return (
        <AppContext.Provider value={{ ...state, setAppState }}>
            <WebsiteLoading />
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
