import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, cargo, telefono, email, link, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{cargo}</td>
      <td>{telefono}</td>
      <td>{email}</td>
      <td>
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
