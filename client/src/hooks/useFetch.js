import { useEffect,useState } from "react";
import axios from 'axios';

const useFetch=(url)=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            try{
                const res= await axios.get(url);    //it will get any data that is sent as json from backend server in that url
                setData(res.data);
            }catch(err){
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[url]);           //useEffect when url changes

    const reFetch=async()=>{
        setLoading(true)
        try{
            const res= await axios.get(url);
            setData(res.data);
        }catch(err){
            setError(err);
        }
        setLoading(false);
    };

    return{data,loading,error,reFetch};
}

export default useFetch;