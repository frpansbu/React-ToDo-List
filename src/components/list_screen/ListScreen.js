import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'

import PropTypes from 'prop-types';

export class ListScreen extends Component {

    state = {
        visibleModal: false,
    }

    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    changeOwner = (e) => this.props.todoList.owner = e.target.value

    changeName = (e) => this.props.todoList.name = e.target.value

    showModal = () =>{
        this.setState({visibleModal: true})
        console.log("show modal");
    }
    hideModal = () =>{
        this.setState({visibleModal:false})
        console.log("hide modal")
    }

    render() {
        var visibilityState = this.state.visibleModal? "visible":"hidden"
        var opacityState = this.state.visibleModal? "1":"0"
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                
                <ListTrash 
                //todoList = {this.props.todoList}
                showModal = {this.showModal}
                />
                
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield" 
                            onChange = {this.changeName}
                            />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield" 
                            onChange = {this.changeOwner}
                            />
                    </div>
                </div>
                <ListItemsTable 
                todoList={this.props.todoList}
                //sortTask = {this.sortTask} 
                goEdit = {this.props.goEdit}
                />
                <div className = "modal" style={{visibility: visibilityState, opacity: opacityState}}>
                    <div className = "modal_dialog">
                        <p>Delete List?</p>
                        
                        <p><strong>Are you sure you want to delete the list?</strong></p>
                        
                        <button onClick = {() => this.props.deleteList(this.props.todoList.key)}>Yes</button>
                        <button onClick = {this.hideModal}> No</button>
                        <br></br>
                        <p>The list will not be retreivable</p>
                    </div>
                </div>
            </div>
        )
    }
}

ListScreen.propTypes = {
    todoList: PropTypes.object.isRequired
}


export default ListScreen
