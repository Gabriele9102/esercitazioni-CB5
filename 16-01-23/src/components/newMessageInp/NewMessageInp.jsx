import './newMessageInp.css';
import { useState } from 'react';


const NewMessageInp = () =>{
    const [inputText, setInputText] = useState('');

    const onHandleInput = (e) => setInputText(e.target.value);
    const onHandleSubmit = (e) => { e.preventDefault()};
    return(
    <div className='NewMessageInp'>
        <form onSubmit={onHandleSubmit}>
            <input placeholder='What are you thinking today?' value={inputText} onChange={onHandleInput} type='text' />
        
            <input type='submit' value='+' />
        </form>
    </div>
 )
}
export default NewMessageInp