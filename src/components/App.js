import React from 'react';
import ContactDetails from  './contactsDetails'
import {addContact} from '../actions/addContact'
import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'

class App extends React.Component{
  
  render () {
    return  (
    <div>
      <ContactDetails name="Abhishek" number="9829" />
    </div>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addContact }, dispatch)
}

export default connect(mapDispatchToProps)(App)