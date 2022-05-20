import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";
import {Modal} from '../Modal'

function AppIU() {
  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext) // pedimos todas las propiedades de TodoContext

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
          <TodoList>
            {error && <p>Ha ocurrido un Error</p>}
            {loading && <p>Estamos Cargando, esperanos</p>}
            {(!loading && !searchTodos.length) && <p>Crear tu primer TODO</p>}
            {searchTodos.map(todo =>
            (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
       {!!openModal &&(
         <Modal>
           <TodoForm/>
         </Modal>
       )}
      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppIU }