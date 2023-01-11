import './banks.css'
import { useFetch } from '../../hooks/useFetch.js';
import { ENDPOINTS } from '../../costants/endpoints.js';

export function Banks() {

    const {data, error, loading, fetch} = useFetch(ENDPOINTS.BANKS);
    
    if(loading){
        return `Caricamento...`;
      }
    
      if(error || !data){
        return `Error 404`;
      }
      
    return (<section>
        <div>{data?.account_number}</div>
        <div>{data?.iban}</div>
        <div>{data?.bank_name}</div>
        <button onClick={fetch}>Reload</button>
    </section>)
}