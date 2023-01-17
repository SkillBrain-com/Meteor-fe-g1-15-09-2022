import { useMemo } from "react";
import ClicksButton from './ClicksButton';

function DataTable({listaDate, onButtonClick}) {
    const tableContent = useMemo(
        () => {
            console.log("Se recalculeaza");
            return listaDate.map(el => (
                <tr key={el}>
                    <td>{el}</td>
                    <td><ClicksButton onClick={onButtonClick}/></td>
                </tr>
            ))
        },
        [listaDate, onButtonClick]
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Number#</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
    );
}

export default DataTable;