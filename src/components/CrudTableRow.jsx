import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, link, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>
        <a target="_blank" rel="noopener" href={link}>
          Documentación
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
