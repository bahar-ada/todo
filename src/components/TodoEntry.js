import React,{Component}from 'react';
import todoStore from '../store/TodoStore';

class TodoEntry extends Component{
    state={
        value:''
    }

    handleKeyDown(event){
        if(event.keyCode !==13){
            return;
        }
        event.preventDefault()
        todoStore.addtoDo(this.state.value);
        this.setState({
            value:''
        })
    }
    render(){
        return(
            <header className="todoapp">
            <h1>todos</h1>
            <input
            value={this.state.value}
            onChange={event=>{this.setState({value:event.target.value})}}
            onKeyDown={event=>{this.handleKeyDown(event)}}
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"/>
            </header>
        )
    }
}

export default TodoEntry