import React, { useState, useEffect } from "react";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "HTML",
    link: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    id: 2,
    name: "CSS",
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    id: 4,
    name: "React",
    link: "https://react.dev/",
  },
  {
    id: 5,
    name: "Vite",
    link: "https://vitejs.dev/",
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
    <div>
      <h2>CrudApp</h2>
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
