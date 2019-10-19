import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sortT: 0,
            sortD: 0,
            sortS: 0,
            test:  0
        }
    }

    sortTask = () =>{
        ////
        let itemsCopy = [];
        for(let i = 0; i < this.props.todoList.items.length; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.props.todoList.items[i].key;
            itemsCopy[i].description = this.props.todoList.items[i].description;
            itemsCopy[i].due_date = this.props.todoList.items[i].due_date;
            itemsCopy[i].assigned_to = this.props.todoList.items[i].assigned_to;
            itemsCopy[i].completed = this.props.todoList.items[i].completed;
        }
        let copy = {
            key: this.props.todoList.key,
            name: this.props.todoList.name,
            owner: this.props.todoList.owner,
            items: itemsCopy
        }
        this.props.pushUndo(copy);
        this.forceUpdate();
        ////
        if(this.state.sortT === 0){
            this.props.todoList.items.sort((a,b) => (a.description > b.description ? "1" 
        :a.description < b.description ? "-1" : "0"))
        this.setState({sortT: 1})
        }
        else{
            this.props.todoList.items.sort((a,b) => (a.description < b.description ? "1" 
        :a.description > b.description ? "-1" : "0"))
        
        this.setState({sortT: 0})
        }
        this.forceUpdate();
    }

    sortDate = () => {
        ////
        let itemsCopy = [];
        for(let i = 0; i < this.props.todoList.items.length; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.props.todoList.items[i].key;
            itemsCopy[i].description = this.props.todoList.items[i].description;
            itemsCopy[i].due_date = this.props.todoList.items[i].due_date;
            itemsCopy[i].assigned_to = this.props.todoList.items[i].assigned_to;
            itemsCopy[i].completed = this.props.todoList.items[i].completed;
        }
        let copy = {
            key: this.props.todoList.key,
            name: this.props.todoList.name,
            owner: this.props.todoList.owner,
            items: itemsCopy
        }
        this.props.pushUndo(copy);
        this.forceUpdate();
        ////
        if(this.state.sortD === 0){
            this.props.todoList.items.sort((a,b) => (a.due_date > b.due_date ? "1" 
        :a.due_date < b.due_date ? "-1" : "0"))
        this.setState({sortD: 1})
        }
        else{
            this.props.todoList.items.sort((a,b) => (a.due_date < b.due_date ? "1" 
        :a.due_date > b.due_date ? "-1" : "0"))
        
        this.setState({sortD: 0})
        }
        this.forceUpdate();
    }

    sortStatus = () =>{
        ////
        let itemsCopy = [];
        for(let i = 0; i < this.props.todoList.items.length; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.props.todoList.items[i].key;
            itemsCopy[i].description = this.props.todoList.items[i].description;
            itemsCopy[i].due_date = this.props.todoList.items[i].due_date;
            itemsCopy[i].assigned_to = this.props.todoList.items[i].assigned_to;
            itemsCopy[i].completed = this.props.todoList.items[i].completed;
        }
        let copy = {
            key: this.props.todoList.key,
            name: this.props.todoList.name,
            owner: this.props.todoList.owner,
            items: itemsCopy
        }
        this.props.pushUndo(copy);
        this.forceUpdate();
        ////
        if(this.state.sortS === 0){
            this.props.todoList.items.sort((a,b) => (a.completed ? "1" 
        :b.completed ? "-1" : "0"))
        this.setState({sortS: 1})
        }
        else{
            this.props.todoList.items.sort((a,b) => (a.completed ? "-1" 
        :b.completed ? "1" : "0"))
        
        this.setState({sortS: 0})
        }
        this.forceUpdate();
    }

    moveUp = (ind, e) =>{
        e.stopPropagation();
        ////
        let itemsCopy = [];
        for(let i = 0; i < this.props.todoList.items.length; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.props.todoList.items[i].key;
            itemsCopy[i].description = this.props.todoList.items[i].description;
            itemsCopy[i].due_date = this.props.todoList.items[i].due_date;
            itemsCopy[i].assigned_to = this.props.todoList.items[i].assigned_to;
            itemsCopy[i].completed = this.props.todoList.items[i].completed;
        }
        let copy = {
            key: this.props.todoList.key,
            name: this.props.todoList.name,
            owner: this.props.todoList.owner,
            items: itemsCopy
        }
        this.props.pushUndo(copy);
        this.forceUpdate();
        ////
        
        let temp =  this.props.todoList.items[ind];
        this.props.todoList.items[ind] = this.props.todoList.items[ind-1];
        this.props.todoList.items[ind-1] = temp;
        this.forceUpdate();
    }

    moveDown = (ind, e) =>{
        e.stopPropagation();
        ///
        let itemsCopy = [];
        for(let i = 0; i < this.props.todoList.items.length; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.props.todoList.items[i].key;
            itemsCopy[i].description = this.props.todoList.items[i].description;
            itemsCopy[i].due_date = this.props.todoList.items[i].due_date;
            itemsCopy[i].assigned_to = this.props.todoList.items[i].assigned_to;
            itemsCopy[i].completed = this.props.todoList.items[i].completed;
        }
        let copy = {
            key: this.props.todoList.key,
            name: this.props.todoList.name,
            owner: this.props.todoList.owner,
            items: itemsCopy
        }
        this.props.pushUndo(copy);
        this.forceUpdate();
        ///
        let temp =  this.props.todoList.items[ind];
        this.props.todoList.items[ind] = this.props.todoList.items[ind+1];
        this.props.todoList.items[ind+1] = temp;
        this.forceUpdate();
    }

    deleteItem = (ind, e) =>{
        e.stopPropagation();
        ///
        let itemsCopy = [];
        for(let i = 0; i < this.props.todoList.items.length; i++){
            itemsCopy[i] = {
                key: "",
                description: "",
                due_date: "",
                assigned_to: "",
                completed: false,
            }
            itemsCopy[i].key = this.props.todoList.items[i].key;
            itemsCopy[i].description = this.props.todoList.items[i].description;
            itemsCopy[i].due_date = this.props.todoList.items[i].due_date;
            itemsCopy[i].assigned_to = this.props.todoList.items[i].assigned_to;
            itemsCopy[i].completed = this.props.todoList.items[i].completed;
        }
        let copy = {
            key: this.props.todoList.key,
            name: this.props.todoList.name,
            owner: this.props.todoList.owner,
            items: itemsCopy
        }
        this.props.pushUndo(copy);
        this.forceUpdate();
        ///
        for(var i = ind; i < this.props.todoList.items.length - 1; i++){
            this.props.todoList.items[i] = this.props.todoList.items[i+1]
        }
        this.props.todoList.items.pop()
        this.forceUpdate();
    }

    render() {
        var test = 0;
        return (
            <div id="list_items_container">
            
            <div className="list_item_header_card">
                <div className="list_item_task_header" onClick = {this.sortTask.bind(this)}>Task</div>
                <div className="list_item_due_date_header" onClick = {this.sortDate.bind(this)}>Due Date</div>
                <div className="list_item_status_header" onClick = {this.sortStatus.bind(this)}>Status</div>
            </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            index = {test++}
                            key={todoItem.key}
                            listItem={todoItem} 
                            todoList = {this.props.todoList}
                            moveUp = {this.moveUp}
                            moveDown = {this.moveDown}
                            deleteItem = {this.deleteItem}
                            goEdit = {this.props.goEdit}
                            />
                    ))
                } 
            <div className = "list_item_add_card" 
            onClick = {() => this.props.goEdit(null)}>&#x2b;</div>
            </div>
        )
    }
}

export default ListItemsTable
