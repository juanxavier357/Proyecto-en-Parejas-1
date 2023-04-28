import React, { useState, useEffect } from "react";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";

function CrudApi() {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:5000/tecnologias";

  useEffect(() => {
    api.get(url).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb(res);
      } else {
        setDb(null);
      }
    });
  }, []);

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
    <div>
      <h2>Crud API</h2>
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

export default CrudApi;
