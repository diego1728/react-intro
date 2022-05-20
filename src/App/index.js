import React from 'react'
import { TodoProvider } from '../TodoContext';
import { AppIU } from './AppIU'


//import './App.css';

//const todosdefaul = [
//  {text:'Cortar cebolla', completed: true},
//  {text: 'Tomar el curso', completed: false},
//  {text: 'salir un rato', completed: false}
//]





function App() {


  return (
    <TodoProvider>
      <AppIU/>
    </TodoProvider>
    

  );
}

export default App;
