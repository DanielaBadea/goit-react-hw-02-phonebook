import React, { Component } from "react";
import styles from './App.module.css'
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


export class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      contacts: [],
    }
  }
 hendleAddContacts = (newContact) => {
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact]
  }))
 }
  hendleToggleContacts = (id) => {
    this.setState((prevState)=>( {
      contacts : prevState.contacts.map((contact)=> contact.id ===id ? {...contact} : contact)
    })
  )}

  handleRenderContacts = () => {
    return this.state.contacts.map(contact => (
      <li key={contact.id} className={styles.itemContact}>{`${contact.name}: ${contact.number}`} </li>
    ))
  }

    render() {
      return(
        <>
        <Section title="PhoneBook">
        <ContactForm onAddContacts = {this.hendleAddContacts}/>
        <ContactList onRenderContacts ={this.handleRenderContacts}/>
        </Section>
        </>
      )
    }
  }
