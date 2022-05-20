import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext) // uso usecontext

    
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value); 
        
    }
    return(
        <input 
        className='TodoSearch' 
        placeholder='cebolla'
        value={searchValue}
        onChange={onSearchValueChange}
        />);    
}

export {TodoSearch}