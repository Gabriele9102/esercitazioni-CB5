import  './appliance.css'
import { useFetch } from '../../hooks/useFetch.js';
import { ENDPOINTS } from '../../costants/endpoints.js';

export function Appliance() {

    const {data, error, loading, fetch} = useFetch(ENDPOINTS.APPLIANCES);
    
    if(loading){
        return `Caricamento...`;
      }
    
      if(error || !data){
        return `Error 404`;
      }
    return (<section>
        <div>{data?.id}</div>
        <div>{data?.equipment}</div>
        <div>{data?.brand}</div>
        <button onClick={fetch}>Reload</button>
    </section>)
}