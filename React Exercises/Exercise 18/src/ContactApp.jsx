import ContactContext from "../ContactContext";
import { reducer, initialState } from "./ContactReducer";
import { useReducer, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const createId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function ContactApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setPhone("");
    setEmail("");
    setError("");
  };

  const addContact = () => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedPhone || !trimmedEmail) {
      setError("All fields are required.");
      return;
    }

    setError("");

    if (editingId) {
      const existingContact = state.find((contact) => contact.id === editingId);

      dispatch({
        type: "edit",
        payload: {
          id: editingId,
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          favourite: existingContact ? existingContact.favourite : false,
        },
      });
    } else {
      dispatch({
        type: "add",
        payload: {
          id: createId(),
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          favourite: false,
        },
      });
    }

    resetForm();
  };

  const deleteContact = (id) => {
    dispatch({ type: "delete", payload: id });

    if (editingId === id) {
      resetForm();
    }
  };

  const toggleFavourite = (id) => {
    dispatch({ type: "togglefavourite", payload: id });
  };

  const editContact = (contact) => {
    setEditingId(contact.id);
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email || "");
  };

  const contextValue = {
    state,
    dispatch,
    addContact,
    editContact,
    deleteContact,
    toggleFavourite,
  };

  return (
    <ContactContext.Provider value={contextValue}>
      <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          editingId={editingId}
          error={error}
          onNameChange={setName}
          onPhoneChange={setPhone}
          onEmailChange={setEmail}
          onSubmit={addContact}
          onCancel={resetForm}
        />

        <ContactList
          contacts={state}
          onToggleFavourite={toggleFavourite}
          onEdit={editContact}
          onDelete={deleteContact}
        />
      </div>
    </ContactContext.Provider>
  );
}

export default ContactApp;