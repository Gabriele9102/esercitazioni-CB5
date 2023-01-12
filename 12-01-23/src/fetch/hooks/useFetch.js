import { useState, useEffect } from "react";


export function useFetch(Url){

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
    
    const fetchList = () => {
          setData(null);
         setLoading(true);
         setError(null);
    
        fetch(Url)
          .then(res => res.json())
          .then((data) => { console.log(data);
            setData(data)})
          .catch((err) => {
            console.error(err)
             setError(err)
          })
          .finally(() => {
             setLoading(false)
          })

//  const fetchList = async () => {
//             setData(null);
//             setError(null);
//             setLoading(true);
    
//             try {
//                 const data = await fetch(Url)
//                 .then(res => res.json());
//                 setData(data);
//             } catch (error) {
//                 setError(error)
//             } finally {
//                 setLoading(false)
//             }
        }

        useEffect(() => {
            fetchList();
        }, []);      

     return {
            data,
            error,
            loading,
            fetch: fetchList
          }
    }
