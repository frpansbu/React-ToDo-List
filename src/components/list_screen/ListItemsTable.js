import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
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
        if(this.state.sortT == 0){
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
        if(this.state.sortD == 0){
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
        if(this.state.sortS == 0){
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
                            />
                    ))
                } 
            <div className = "list_item_add_card" >&#x2b;</div>
            </div>
        )
    }
}

export default ListItemsTable
