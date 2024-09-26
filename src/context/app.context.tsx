import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { RolesDocument } from '../../prismicio-types';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';
import WebsiteLoading from '@/app/internal/website/(components)/WebsiteLoading';

interface AppContextType {
    user: User | null;
    roles: RolesDocument[];
    loading: boolean;
    setAppState: (newState: Partial<AppContextType>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<Omit<AppContextType, 'setAppState'>>({
        user: null,
        roles: [],
        loading: true,
    });

    const setAppState = (newState: Partial<AppContextType>) => {
        setState((prevState) => ({
            ...prevState,
            ...newState,
        }));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Current user:", user);
                setAppState({ user, loading: false });
                
            } else {
                console.log("No user signed in");
            }
        });
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
