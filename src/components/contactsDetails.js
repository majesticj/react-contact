import React from 'react';
import { connect } from 'react-redux'
import {addContact} from '../actions/addContact'
import {bindActionCreators } from 'redux'


class ContactsDetails extends React.Component {
    constructor () {
        super(...arguments)
        this.contact = {}
        this.contact.name = this.props.name 
        this.contact.number = this.props.number
    }
    render () {
        return (
            <div>
                <h2>Contact Details</h2>
                <form>
                    <span> Name: </span>
                    <input type="text" placeholder="Enter your name here" value={this.contact.name} />
                    <br />
                    <span> Contact Number: </span>
                    <input type="number" placeholder="Enter your phone number here" value={this.contact.number}/>
                    <button type="button" onClick={() => this.props.addContact(this.contact)}>Add This Contact</button>

                </form>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        contact: state.activeContact
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addContact }, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(ContactsDetails)