import { createContext, useContext, useState } from "react";
import {registerRequest,loginRequest }   from "../api/auth";

export const AuthContext = createContext()
export const useAuth =() =>{
    const context = useContext(AuthContext);
    if(!context) { 
        throw new Error("There is not auth provider");
    }
    return context;
}

export const AuthProvider = ({children}) =>{
const [user, setUser] = useState(null);
const[isAuthenticated, setIsAuthehticated] =useState(false);
const[errors,setErrors]=useState([]);


const signup = async(user)=> {
    try{

                const res =await registerRequest(user);
                console.log(res.data);
                setUser(res.data);
                setIsAuthehticated(true);
            }catch(error){
                console.log(error.response);
                setErrors(error.response.data);
            }
};

const signin = async (user) => { 
    try{
        const res = await loginRequest(user)
        console.log(res)
    }catch (error){

        console.error(error)
    }

}

return( 
<AuthContext.Provider 
    value ={{
    signup,
    signin,
    user,
    isAuthenticated,
    errors
}}
>
    {children}
    </AuthContext.Provider>
    
    );

};