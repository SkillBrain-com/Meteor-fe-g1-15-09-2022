import {useState} from 'react';

const DEFAULT_STATE = {
    firstName: "",
    lastName: "",
    city: ""
}
function ElegantControlledForm() {
    const [users, setUsers] = useState([]);
    const [formValue, setFormValue] = useState(DEFAULT_STATE);

    function handleOnChange(e) {
        const newForm = {
            ...formValue,
            [e.target.name]: e.target.value
        }
        setFormValue(newForm);
    }

    function handleOnClearClick() {
        setFormValue(DEFAULT_STATE);
    }

    function handleOnAddClick() {
        setUsers([...users, formValue]);
        handleOnClearClick();
    }

    return (
        <div>
            <h1>Elegant Formular Controlat</h1>
            {
                Object.keys(DEFAULT_STATE).map(key => (
                    <div>
                        <label>{key}</label>
                        <input
                            key={key}
                            value={formValue[key]}
                            name={key}
                            onChange={handleOnChange}
                        />
                    </div>
                ))
            }
            <button onClick={handleOnAddClick}>Add</button>
            <button onClick={handleOnClearClick}>Clear</button>
            <table>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ElegantControlledForm;