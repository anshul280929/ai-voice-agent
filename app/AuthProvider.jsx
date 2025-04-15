"use client"
import { api } from "@/convex/_generated/api";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import React, { useEffect, useState, createContext, Suspense } from "react";

// Create the UserContext
export const UserContext = createContext();

function AuthProvider({children}){
    const user = useUser();
    const CreateUser = useMutation(api.users.CreateUser);
    const [userData, setUserData] = useState();
    
    useEffect(() => {
        console.log(user);
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
        const result = await CreateUser({
            name: user?.displayName,
            email: user.primaryEmail
        });
        console.log(result);
        setUserData(result);
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserContext.Provider value={{userData, setUserData}}>
                {children}
            </UserContext.Provider>
        </Suspense>
    );
}

export default AuthProvider;