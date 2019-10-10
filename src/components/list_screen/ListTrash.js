import React, { Component } from 'react'


export class ListTrash extends Component {
    /*deleteList = () =>{
        console.log(this.props.todoList.name)
    }passed in currentlist's name into deleteList method,
    current list passed in via ListScreen.js by 
    todoList = {this.props.todoList}*/
    render() {
        return (
            <div id="list_trash" onClick = {this.props.showModal}>&#128465;
            
            </div>
        )
    }
}

export default ListTrash
