import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts: [
      {
        "id":"ryan",
        "name":"Ryan Florence",
        "email":"ryan@reacttraining.com",
        "avatarURL":"https://everydaypowerblog.com/wp-content/uploads/2014/03/rumi-quotes-6.jpg"
      },
      {
        "id":"micheal",
        "name":"Micheal Jackson",
        "email":"micheal@reacttraining.com",
        "avatarURL":"https://s-media-cache-ak0.pinimg.com/originals/f9/41/20/f94120c5f329f0d3a763e4cdb4e327f2.jpg"
      },
      {
        "id":"tyler",
        "name":"Tyler McGinis",
        "email":"tyler@reacttraining.com",
        "avatarURL":"https://i.pinimg.com/736x/65/d2/5c/65d25c7f960c2d211da6cd92ce4318f1--poet-rumi-positive-attitude-quotes.jpg"
      }
    ]
  }
  removeContact = (contact) =>{
    this.setState((state)=>({
      contacts: state.contacts.filter((c)=> c.id!==contact.id)
    }))
  }
  render() {
    return (
      <div className="App">
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
        />
      </div>
    )
  }
}

export default App;
