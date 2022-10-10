import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ findName }) => {
    return (
        <div className={css.form} >
            <label className={css.label} htmlFor="find" >Find contacts by name</label>
            <input className={css.input} onChange={findName} id="find" type="text" name="findName" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
        </div>
    )
}

Filter.protoTypes = {
    findName: PropTypes.func,
};