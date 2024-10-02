'use client'
import { auth } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react'
import Cookies from 'js-cookie';

export default function LoginPage() {
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Handle successful login

                if (result.user.email?.includes('hawksworth.org')) {
                    //@ts-ignore
                    Cookies.set('hw-token', result.user['accessToken'], { expires: 7 });
                    window.location.reload();
                } else {
                    auth.signOut()
                    alert("Please login with your Hawksworth account")
                }



            })
            .catch((error) => {
                // Handle errors
                console.error("Error during login:", error);
            });
    };

    useEffect(() => {
        const cookie = Cookies.get('hw-token');
        if (!cookie) {
            auth.signOut()
        }
    },[])

    return (
        <>
            <div className='container'>
                <div className="row align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                    <div className="col-lg-4 col-9">
                        <button className="btn-four w-100 tran3s d-block mt-20" onClick={signInWithGoogle}>
                            Login With Hawksworth
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
