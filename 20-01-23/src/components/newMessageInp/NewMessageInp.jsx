import { useState, useEffect } from 'react';
import {POST} from '../../hooks/UseFetch';
import './newMessageInp.css';

const NewMessageInp = ({setModalDeploy}) =>{
    const [authorText, setAuthorText] = useState('');
    const [titleText, setTitleText] = useState('');
    const [inputText, setInputText] = useState('');
    const [linkImgText, setLinkImgText] = useState('');

    const [postMsg, setPostMsg]= useState({});

    const onHandleAuthor = (e) => setAuthorText(e.target.value);
    const onHandleTitle = (e) => setTitleText(e.target.value);
    const onHandleInput = (e) => setInputText(e.target.value);
    const onHandleImg = (e) => setLinkImgText(e.target.value);

    const onSubmit = (e) => { 
        e.preventDefault()
        setPostMsg({
            id: 1,
            userId: 15,
            image: linkImgText,
            username: authorText,
            title: titleText,
            body: inputText,
        })
        
        setModalDeploy(false);
    };

    useEffect(() => {
        if( postMsg.username && postMsg.title)
            POST("post/add", postMsg);
    }, [postMsg]);
    
    return(
    <div className='NewMessageInp'>
        <form onSubmit={onSubmit}>
            <input placeholder='Image...' value={linkImgText} onChange={onHandleImg} type='text' required />
            <input placeholder='Nickname...' value={authorText} onChange={onHandleAuthor} type='text' required/>
            <input placeholder='Title...' value={titleText} onChange={onHandleTitle} type='text' required/>
            <input placeholder='What are you thinking today?' value={inputText} onChange={onHandleInput} type='text' required/>
        
            <input type='submit' value='Add' />
        </form>
    </div>
 )
}
export default NewMessageInp