import React, { useContext, useEffect } from "react";

const Api=`https://www.omdbapi.com/?apikey=727bbdc1&s=titanic`

const AppContext = React.createContext();
// we need to create a provider fun
const AppProvider=({children})=>{
const getMovies=async(url)=>{
try{
    const res=await fetch(url)
    const data =await res.json();
    console.log(data)
}catch(error){
console.log(error);
}
}
    useEffect(()=>{
       getMovies(Api);
    },[])
return <AppContext.Provider value="swati">
    {children}
</AppContext.Provider>   
}
// global custom hooks
const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext};