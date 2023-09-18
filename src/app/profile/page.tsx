"use client"
import React, { useEffect } from 'react';
import {useAuth, UserProfile, useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

const Profile = () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
        const router = useRouter();
    const { isSignedIn, user } = useUser();
    useEffect(() => {
        // console.log(isSignedIn, isLoaded, user, userId, sessionId);
        const timer = setTimeout(() =>{
            if (!isLoaded || !isSignedIn) {
                router.push("/")
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [isSignedIn, isLoaded, user, userId, sessionId]);
    return (
        <div>
            Hello, {user?.fullName} welcome to Clerk
            <div className={"max-w-7xl container overflow-hidden"}><UserProfile /></div>
        </div>
    );
};

export default Profile;