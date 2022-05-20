import React from "react";
import './CreateTodoButton.css'; 

function CreateTodoButton(props){
    const onclickButton = ()=>{
        props.setOpenModal(prevState =>!prevState)
        
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={onclickButton}/*envolverlo en una funcion para que no se ejecute de una vez*/
        /*en el caso que enviemos parametros a la funcion es necesario envolver la funcion en otra funcion */
        >+</button>
    );
}

export {CreateTodoButton}; 