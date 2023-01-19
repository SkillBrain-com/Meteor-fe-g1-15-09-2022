import {useState} from 'react';

function ControlledForm() {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");

    function handleChangeFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleChangeLastName(e) {
        setLastName(e.target.value);
    }

    function handleChangeCity(e) {
        setCity(e.target.value);
    }

    function handleOnClearClick() {
        setFirstName("");
        setLastName("");
        setCity("");
    }

    function handleOnAddClick() {
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            city: city,
        };
        setUsers([...users, newUser])
        handleOnClearClick();
    }

    return (
        <div>
            <h1>Formular Controlat</h1>
            {/* Input controlat */}
            <input
                value={firstName}
                onChange={handleChangeFirstName}
            />
            {/* Input controlat */}
            <input
                value={lastName}
                onChange={handleChangeLastName}
            />
            {/* Input controlat */}
            <input
                value={city}
                onChange={handleChangeCity}
            />
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

export default ControlledForm;