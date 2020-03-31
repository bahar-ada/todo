import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../store/TodoStore";
import {observer} from 'mobx-react'

const TodoItems = observer(class TodoItems extends Component {
  render() {
    let renderItem=[];
                {
            if (todoStore.All){renderItem=
              todoStore.todos.map(todo=>{

                return(
                   <TodoItem todo={todo}/>
                )

            })} else if(todoStore.Active){renderItem=
              todoStore.Act.map(Act=>{

                return(
                  <TodoItem todo={Act}/>
                )

            })
            }else{renderItem=
              todoStore.comp.map(com=>{

                return(
                   <TodoItem todo={com}/>
                )

            })
            }}
            
    return (
      <section className="main">
        <ul className="todo-list">
          {renderItem}       
                    

        </ul>
       
      </section>
    );
  }
})

export default TodoItems;
