function ContactList({ contacts, onToggleFavourite, onEdit, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px 12px",
            marginBottom: "10px",
          }}
        >
          <div>
            <strong>{contact.name}</strong>
            <div>{contact.phone}</div>
            <div>{contact.email}</div>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button type="button" onClick={() => onToggleFavourite(contact.id)}>
              {contact.favourite ? "★" : "☆"}
            </button>
            <button type="button" onClick={() => onEdit(contact)}>
              Edit
            </button>
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;