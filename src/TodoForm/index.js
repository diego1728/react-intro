import React from "react";
import { TodoContext } from '../TodoContext'
import './ToDoForm.css'

function TodoForm() {
    const [
        newTodoValue,
        setNewTodoValue
    ] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);


    }
    const onCancel = () => {
        setOpenModal(false)
        setNewTodoValue('');
    }


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false); 

    }


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="corta la cebolla" />
            <div  className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                className="TodoForm-button TodoForm-button-add"
                    type="submit">
                    Agregar
                </button>
            </div>

        </form>
    );
}

export { TodoForm }