import './blood_types.css'
import { useFetch } from '../../hooks/useFetch.js';
import { ENDPOINTS } from '../../costants/endpoints.js';

export function BloodTypes() {

    const {data, error, loading, fetch} = useFetch(ENDPOINTS.BLOOD_TYPES);
    
    if(loading){
        return `Caricamento...`;
      }
    
      if(error || !data){
        return `Error 404`;
      }
    return (<section>
        <div>{data?.group}</div>
        <div>{data?.rh_factor}</div>
        <div>{data?.type}</div>
        <button onClick={fetch}>Reload</button>
    </section>)
}