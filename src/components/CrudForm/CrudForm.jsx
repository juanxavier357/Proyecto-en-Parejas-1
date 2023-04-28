import React, { useState, useEffect } from "react";
import "./CrudForm.scss"

const initialForm = {
  name: "",
  cargo: "",
  telefono: "",
  email: "",
  link: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.link) {
      //pequeña validacion de datos no vacios
      alert("Datos Incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <div className="Content__Form">
      <div className="Content__Form--Title">
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      </div>
      <div className="Content__Form--Description">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={form.name}
          />
          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            onChange={handleChange}
            value={form.cargo}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Telefono"
            onChange={handleChange}
            value={form.telefono}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />
          <input
            type="text"
            name="link"
            placeholder="Github"
            onChange={handleChange}
            value={form.link}
          />
        </form>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </div>
    </div>
  );
};

export default CrudForm;
