import { useState } from 'react';

function UncontrolledForm() {
    const [users, setUsers] = useState([]);
    function handleOnSubmit(e) {
        e.preventDefault();

        const newUser = {};
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].type !== "submit") {
                const key = e.target[i].name;
                const value = e.target[i].value;
                newUser[key] = value;
            }
        }

        setUsers([...users, newUser]);
    }

    return (
        <div>
            <h1>Formular Necontrolat</h1>
            <form onSubmit={handleOnSubmit}>
                <input name="firstName" />
                <input name="lastName" />
                <input name="city" />
                <input type="submit" value="Adauga" />
            </form>
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

export default UncontrolledForm;