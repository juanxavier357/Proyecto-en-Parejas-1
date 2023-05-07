import React, { useState, useEffect } from "react";
import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable/CrudTable";
import "./CrudApp.scss"

/*const initialDB = [
  {
    id: 1,
    name: "Michael",
    cargo: "FullStack Developer",
    telefono: 3222322232,
    email: "mgt@gmail.com",
    link: "https://github.com/Mike2020x",
  },
  {
    id: 2,
    name: "Juan",
    cargo: "FullStack Developer",
    telefono: 51921657652,
    email: "cabellosalirrosas@gmail.com",
    link: "https://github.com/juanxavier357",
  },
];*/

function CrudApp() {
  const [db, setDb] = useState([]);
  const [dbase, setDbase] = useState({});
  const [dataToEdit, setDataToEdit] = useState(null);

  const handleReadAll = async () => {
    const url = 'https://api-proyecto-en-parejas.onrender.com/api/members'
    const config = {
      method: 'GET',
    }
    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setDb(data) // asigna el valor al estado y genera un nuevo renderizado (pintado)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleReadAll()
  }, [])

  const createData = async (form) => {
    form.id = Date.now();
    //console.log(data);
    const url = 'https://api-proyecto-en-parejas.onrender.com/api/members'
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(form),
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setDb([...db, data]);
    } catch (error) {
      console.log(error)
    }
  };

  const updateData = (form) => {
    let newForm = db.map((el) => (el.id === form.id ? form : el));
    setDb(newForm);
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
  }

  return (
    <div className="Content__Forms">
      <div className="Content__Forms--Title">
        <h2>Team List</h2>
      </div>
      <article className="Content__Forms--Components">
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
