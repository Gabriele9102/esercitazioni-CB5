
import { useState } from 'react';
import './filter.css';

const Filter = ({setState}) => {
   const [filteredInput, setFilteredInput] = useState("");

   const onHandleInput = (e) => {
    e.preventDefault();
    setFilteredInput(e.target.value);
  };

    const onHandleSubmit= (e) => {
        e.preventDefault();
        setState(filteredInput)
    };

    return(
    <>
        <form className='filter' onSubmit={onHandleSubmit}>
            <input type="text" value={filteredInput} onChange={onHandleInput} placeholder="Search..." required/>
            <input type="submit" value='Search' />
        </form>
    </>
    )
}

export default Filter;