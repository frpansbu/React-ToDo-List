import React, { Component } from 'react'

export class ListItemCard extends Component {
    getStyle = () =>{
        return{
            display: this.props.listItem.completed ? "inline-block":"none",
        }
    }
    getStyle2 = () =>{
        return{
            display: this.props.listItem.completed ? "none":"inline-block",
        }
    }
    getStyle3 = () =>{
        return{
            backgroundColor: this.props.index === 0 ? "grey" : "",
            disabled: true
        }
    }
    getStyle4 = () =>{
        return{
            backgroundColor: this.props.index === this.props.todoList.items.length-1 ? "gray" : "",
            disabled: true
        }
    }

    isDisabled(){
        if (this.props.index === 0) 
            return true;
    }

    isDisabled2(){
        if ( this.props.index === this.props.todoList.items.length-1)
            return true;
    }
    
    testM = () =>{
        console.log("test" + this.props.index)
    }

    render() {
        return (
            <div className='list_item_card'>

                <div className='list_item_card_desription'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className = "list_item_card_completed" 
                style = {this.getStyle()}>Completed
                </div>
                <div className = "list_item_card_not_completed"
                style = {this.getStyle2()}>Pending
                </div>
                <div className = "list_item_card_toolbar">
                    <button className = "list_item_card_button" style = {this.getStyle3()} onClick = {() => this.props.moveUp(this.props.index)} disabled = {this.isDisabled()}>&#x21e7;</button>
                    <button className = "list_item_card_button" style = {this.getStyle4()} onClick = {() => this.props.moveDown(this.props.index)} disabled = {this.isDisabled2()}>&#x21e9;</button>
                    <button className = "list_item_card_button" onClick = {() => this.props.deleteItem(this.props.index)} >&#10005;</button>
                </div>
            </div>
        )
    }
}

export default ListItemCard
