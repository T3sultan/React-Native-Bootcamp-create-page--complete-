import React from 'react'
import MainNavigation from "./MainNavigation";
import {AuthProvider} from "../context/AuthContext";

export default function RootNavigation() {
    return (
        <AuthProvider>
            <MainNavigation/>

        </AuthProvider>
      
    );
}
