import './creditcard.css'
import { ENDPOINTS } from '../../costants/endpoints';
import { useFetch } from '../../hooks/useFetch'; 


const CreditCard = () => {
  
  const {data, error, loading, fetch} = useFetch(ENDPOINTS.CREDIT_CARD)


  if(loading){
    return `Caricamento...`;
  }

  if(error || !data){
    return `Error 404`;
  }

  return (

    
    <div className='container'>
    <div className='container_id_tipo'>
      <p className='id'>{data?.id}</p>
      <p>{data?.credit_card_type.toUpperCase()}</p>
    </div>
      <div className='chip'></div>
      <div className='container_info'>
      <p className='card_number'> {data?.credit_card_number}</p>
      <p className='expiry_date'> {data?.credit_card_expiry_date}</p>
      
      </div>
      <button className='bn13' onClick={fetch}>New Card</button>
    </div>
  )
}


export default CreditCard