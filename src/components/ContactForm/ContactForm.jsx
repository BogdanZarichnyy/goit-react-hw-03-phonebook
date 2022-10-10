import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

export const ContactForm = ({ addName, nameInputId }) => {
    return (
        <form className={css.form} onSubmit={addName} >

            <label className={css.label} htmlFor={nameInputId()} >Name</label>
            <input className={css.input} id={nameInputId()} type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
            
            <label className={css.label} htmlFor="phone" >Number</label>
            <input className={css.input} id="phone" type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" placeholder="000-00-00" required />

            <button className={css.button} type="submit">Add contact</button>

        </form>
    )
}

ContactForm.protoTypes = {
    addName: PropTypes.func,
    nameInputId: PropTypes.func,
};