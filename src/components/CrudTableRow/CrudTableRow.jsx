import React from "react";
import "./CrudTableRow.scss"

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, cargo, telefono, email, link, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{cargo}</td>
      <td className="telefono">{telefono}</td>
      <td className="email">{email}</td>
      <td className="link">
        <a target="_blank" rel="noopener" href={link}>
          Github
        </a>
      </td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
