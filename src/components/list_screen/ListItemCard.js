import React, { Component } from 'react'

export class ListItemCard extends Component {
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
                <div className='list_item_card_completed'>
                    {this.props.listItem.completed}
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
