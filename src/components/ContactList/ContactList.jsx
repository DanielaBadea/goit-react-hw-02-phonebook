import React, { Component } from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component{

render(){
    return (
        <div className={styles.containerContacts}>
        <h3 className={styles.titleContact}>Contact List:</h3>
        <ul className={styles.itemsContact}>
          {this.props.onRenderContacts()}
        </ul>
        </div>
    )
};
}
ContactList.propTypes = {
    onRenderContacts: PropTypes.func.isRequired,
}
export default ContactList;