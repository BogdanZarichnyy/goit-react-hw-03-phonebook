import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ data: { contacts, filter }, deleteName }) => {
    return (
        <ul className={css.list}>
            {filter === '' ?
                contacts.map(user => (
                    <li key={user.id}>{user.name}: {user.number}
                        <button className={css.btndel} onClick={() => deleteName(user.id)} type="button">delete</button>
                    </li>
                )) :
                contacts.filter(item => (item.name.toLowerCase().includes(filter))).map(user => (
                    <li key={user.id}>{user.name}: {user.number}
                        <button className={css.btndel} onClick={() => deleteName(user.id)} type="button">delete</button>
                    </li>
                ))
            }
        </ul>
    )
}

ContactList.protoTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    filter: PropTypes.string,
    deleteName: PropTypes.func,
};