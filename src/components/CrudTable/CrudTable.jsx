import React from "react";
import CrudTableRow from "../CrudTableRow/CrudTableRow";
import "./CrudTable.scss";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="information__table">
      <h3>Equipo</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cargo</th>
            <th className="information__table--telefono">Telefono</th>
            <th className="information__table--email">Email</th>
            <th className="information__table--link">Link</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
