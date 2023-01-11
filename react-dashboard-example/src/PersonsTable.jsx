function PersonsTable({persons}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PersonsTable;