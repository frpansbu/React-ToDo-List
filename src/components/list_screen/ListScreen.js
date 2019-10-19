import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'

import PropTypes from 'prop-types';

export class ListScreen extends Component {

    constructor(props){
        super(props);
    }

    state = {
        visibleModal: false,
        //listDetails: this.props.currentList
        
    }

    /*
    componentWillReceiveProps(nextProps){
        this.setState({listDetails: nextProps.listDetails})
    }*/

    keyDownHander = (e) =>{
        if(e.keyCode === 90 && e.ctrlKey){
            this.props.undo();
            this.forceUpdate();
        }
        if(e.keyCode === 89 && e.ctrlKey){
            this.props.redo();
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.keyDownHander);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.keyDownHander);
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
        else 
            return "";
    }

    changeOwner = (e) => {
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
        this.props.todoList.owner = e.target.value;
        
    }
    changeName = (e) => {
        this.props.todoList.name = e.target.value
    }
    showModal = () =>{
        this.setState({visibleModal: true})
        //console.log("show modal");
    }
    hideModal = () =>{
        this.setState({visibleModal:false})
        //console.log("hide modal")
    }

    render() {
        /*var visibilityState = this.state.visibleModal? "visible":"hidden"
        var opacityState = this.state.visibleModal? "1":"0"
        var isVisible = this.state.visibleModal? "is_visible": ""*/
        
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
                <div className= {this.state.visibleModal? "modal is_visible":"modal"} id="modal_yes_no_dialog" data-animation="slideInOutLeft">
                    <div className="modal_dialog">
                        <header className="dialog_header">
                            Delete list?
                        </header>
                        <section className="dialog_content">
                            <p><strong>Are you sure you want to delete this list?</strong></p>
                        </section>
                            <button id="dialog_yes_button" onClick = {() => this.props.deleteList(this.props.todoList.key)}>Yes</button>
                            <button id="dialog_no_button" onClick = {this.hideModal}>No</button>
                        <footer className="dialog_footer">
                            The list will not be retreivable.
                        </footer>
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
