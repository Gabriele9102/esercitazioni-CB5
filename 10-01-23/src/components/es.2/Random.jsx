import './random.css'
import React, { useEffect,useState } from 'react'

const img ="https://media.istockphoto.com/id/1221230316/vector/golden-emv-chip-icon-secure-online-banking-microchip.jpg?s=612x612&w=0&k=20&c=t4LuV7riZTjy9VP0sfv4aQ26xWJBG0BaMSOaq2L3JWw="


const API_URL = `https://random-data-api.com/api/v2/credit_cards`


const Random = () => {
  const [randomCard, setRandomcard] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);
    
    const fetchList = () => {
         setLoading(true);
         setError(null);
    
        fetch(API_URL)
          .then(r => r.json())
          .then(credit_card => {
            console.log({ credit_card });
             setRandomcard(credit_card)
          })
          .catch((err) => {
            console.error(err)
             setError(err)
          })
          .finally(() => {
             setLoading(false)
          })

        }
        useEffect(()=> {
          fetchList();

          return () =>{
            console.log('test');
          }

        },[])

        if(loading){
          return `Caricamento...`;
        }
      
        if(error || !randomCard){
          return `Error 404`;
        }

        const {id, credit_card_expiry_date, credit_card_number,credit_card_type} = randomCard;

  return (
    <div className='container'>
    <div className='container_id_tipo'>
      <p className='id'>{id}</p>
      <p>{ credit_card_type.toUpperCase()}</p>
    </div>
      <div className='chip'></div>
      <div className='container_info'>
      <p className='card_number'> {credit_card_number}</p>
      <p className='expiry_date'> {credit_card_expiry_date}</p>
      </div>
    </div>
  )
}


export default Random