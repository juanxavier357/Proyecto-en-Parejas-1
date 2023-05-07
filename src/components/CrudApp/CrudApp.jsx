import React, { useState, useEffect } from "react";
import CrudForm from "../CrudForm/CrudForm";
import CrudTable from "../CrudTable/CrudTable";
import "./CrudApp.scss";

function CrudApp() {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const handleReadAll = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/api/members`;
    const config = {
      method: "GET",
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setDb(data); // asigna el valor al estado y genera un nuevo renderizado (pintado)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleReadAll();
  }, []);

  const createData = async (form) => {
    form.id = Date.now();
    //console.log(data);
    const url = `${import.meta.env.VITE_BASE_URL}/api/members`;
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(form),
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      setDb([...db, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (form) => {
    const url = `${import.meta.env.VITE_BASE_URL}/api/members/${form.id}`;
    const config = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(form),
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      let newForm = db.map((el) => (el.id === data.id ? data : el));
      setDb(newForm);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    let isDelete = confirm(
      `¿Estas seguro de eliminar el registro con el id '${id}'?`
    );
    if (isDelete) {
      const url = `${import.meta.env.VITE_BASE_URL}/api/members/${form.id}`;
      const config = {
        method: "DELETE",
      };

      try {
        const response = await fetch(url, config);
        if (response.ok) {
          const newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          console.log(`Error al eliminar el registro con el id '${id}'`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
