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
                    <span className = "list_item_card_button">&#x21e7;</span>
                    <span className = "list_item_card_button">&#x21e9;</span>
                    <span className = "list_item_card_button">&#10005;</span>
                </div>
            </div>
        )
    }
}

export default ListItemCard
