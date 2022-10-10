import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { set, get } from '../utils/localStorageActions';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [],
            filter: '',
        }
    }

    componentDidMount() {
        console.log('Mount components');

        if (!get()) {
            return;
        }
        
        this.setState({ contacts: get() });
    }

    componentDidUpdate( _, prevState) {
        console.log('Update components');

        if (prevState.contacts.length === this.state.contacts.length) {
            return;
        }

        set(this.state.contacts);
    }

    nameInputId = () => {
        return nanoid();
    }

    handleAddName = event => {
        event.preventDefault();

        const { id, value: name } = event.target.elements.name;
        const { value: number } = event.target.elements.number;

        if (this.state.contacts.map(user => user.name).includes(name)) {
            alert(`${name} is already in contacts`);
            return;
        }

        this.setState(previousState => ({ contacts: [...previousState.contacts, { id, name, number }] }));
    }

    handleFindName = (event) => {
        this.setState({ filter: event.target.value.toLowerCase()});
    }

    handleDeleteName = (id) => {
        this.setState(previousState => ({ contacts: previousState.contacts.filter(user => user.id !== id) } ));
    }

    render() {
        return (
            <div className="data">

                <h1>Phonebook</h1>

                <ContactForm addName={this.handleAddName} nameInputId={this.nameInputId} />

                <h2>Contacts</h2>

                <Filter findName={this.handleFindName} />

                <ContactList data={this.state} deleteName={this.handleDeleteName} />

            </div>
        )
    }
};