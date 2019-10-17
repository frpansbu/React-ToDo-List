import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class  ItemScreen extends Component {

    render() {
        return (
            <div id="todo_item">
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                    <div id="item_description_prompt" className ="item_prompt">Description:</div>
                    <input id="item_description_textfield" className ="item_input" type="input" defaultValue = {this.props.todoItem.description}/>
                    <div id="item_assigned_to_prompt" className ="item_prompt">Assigned To:</div>
                    <input id="item_assigned_to_textfield" className ="item_input" type="input" defaultValue = {this.props.todoItem.assigned_to}/>
                    <div id="item_due_date_prompt" className ="item_prompt">Due Date:</div>
                    <input id="item_due_date_picker" className ="item_input" type="date" defaultValue = {this.props.todoItem.due_date}/>
                    <div id="item_completed_prompt" className ="item_prompt">Completed:</div>
                    <input id="item_completed_checkbox" className ="item_input" type="checkbox" defaultChecked = {this.props.todoItem.completed}/>
                </div>
                <button id="item_form_submit_button" className ="item_button" >Submit</button>
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
