import React, { useState, useEffect } from "react";
import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable";
import "./CrudApp.scss"

const initialDB = [
  {
    id: 1,
    name: "Michael",
    cargo: "Frontend Developer",
    telefono: 3222322232,
    email: "mgt@gmail.com",
    link: "https://github.com/Mike2020x",
  },
  {
    id: 2,
    name: "Juan",
    cargo: "Frontend Developer",
    telefono: 516165161,
    email: "jc@gmail.com",
    link: "https://github.com/juanxavier357",
  },
];

function CrudApp() {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = confirm(
      `¿Estas seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div className="Content__Forms">
      <div className="Content__Forms--Title">
        <h2>Team List</h2>
      </div>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}

export default CrudApp;
