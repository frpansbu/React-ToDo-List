import React, { Component } from 'react'
import PropTypes from 'prop-types';
import uuid from 'uuid'

export class  ItemScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            descriptonV: this.props.todoItem.description,
            assignedV: this.props.todoItem.assigned_to,
            dueDateV: this.props.todoItem.due_date,
            completedV: this.props.todoItem.completed,
            keyV: this.props.todoItem.key,
            newItem: false
        }
        this.commonChange = this.commonChange.bind(this);
        if(this.state.keyV === -1){
            this.state.newItem = true
        }
    }

    submitEdit = () =>{
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
        this.props.todoItem.description = this.state.descriptonV;
        this.props.todoItem.assigned_to = this.state.assignedV;
        this.props.todoItem.due_date = this.state.dueDateV;
        this.props.todoItem.completed = this.state.completedV;
        if(!this.state.newItem){
            this.props.cancelEdit(this.props.todoList)
        }else{
            const newTodoItem = {
                description: this.state.descriptonV,
                assigned_to: this.state.assignedV,
                due_date: this.state.dueDateV,
                completed: this.state.completedV,
                key: uuid.v4()
            }
            //console.log(this.props.todoList.name)
            this.props.todoList.items.push(newTodoItem)
            this.props.cancelEdit(this.props.todoList)
            //console.log(this.props.todoList.items[0])
        }
        
    }

    commonChange = (e) =>{
        this.setState({
            descriptonV: e.target.value
        });
    }

    commonChange2 = (e) =>{
        this.setState({
            assignedV: e.target.value
        });
    }

    commonChange3 = (e) =>{
        this.setState({
            dueDateV: e.target.value
        });
    }

    commonChange4 = (e) =>{
        this.setState({
            completedV: e.target.value
        });
    }

    render() {
        return (
            <div id="todo_item">
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                    <div id="item_description_prompt" className ="item_prompt">Description:</div>
                    <input id="item_description_textfield" className ="item_input" type="input" 
                    defaultValue = {this.props.todoItem.description} name = "descriptionV" onChange = {this.commonChange}/>
                    <div id="item_assigned_to_prompt" className ="item_prompt">Assigned To:</div>
                    <input id="item_assigned_to_textfield" className ="item_input" type="input" 
                    defaultValue = {this.props.todoItem.assigned_to} name = "assignedV" onChange = {this.commonChange2}/>
                    <div id="item_due_date_prompt" className ="item_prompt">Due Date:</div>
                    <input id="item_due_date_picker" className ="item_input" type="date" 
                    defaultValue = {this.props.todoItem.due_date} name = "dueDateV" onChange = {this.commonChange3}/>
                    <div id="item_completed_prompt" className ="item_prompt">Completed:</div>
                    <input id="item_completed_checkbox" className ="item_input" type="checkbox" 
                    defaultChecked = {this.props.todoItem.completed} name = "completedV" onChange = {this.commonChange4}/>
                </div>
                <button id="item_form_submit_button" className ="item_button" onClick = {() => this.submitEdit()}>Submit</button>
                <button id="item_form_cancel_button" className ="item_button" onClick = {() => this.props.cancelEdit(this.props.todoList)}>Cancel</button>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
