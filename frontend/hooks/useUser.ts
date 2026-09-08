import { useState } from "react"

export const useUserData = ()=>{
    const [user,setUser] = useState()
    const [isSignedIn,setIsSignedIn] = useState(false)
    const [isLoaded,setIsLoaded] = useState(false)


    const getUser = async (id:string)=>{
        if(!id){
            console.log("UserId not found");
        }
        try {
            
            
        } catch (error) {
            console.log("No user found:",error);            
        }
    }


    return {
        getUser,
        user,
        setUser,
        setIsLoaded,
        isSignedIn,
        isLoaded,
        setIsSignedIn
    }
}