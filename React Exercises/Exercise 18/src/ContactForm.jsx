function ContactForm({
  name,
  phone,
  email,
  editingId,
  error,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      style={{
        marginBottom: "20px",
        background: "#f8f9fa",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "28px 24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
        {editingId ? "Edit Contact" : "Add Contact"}
      </h2>

      {error && (
        <p style={{ color: "#b91c1c", marginBottom: "12px", fontSize: "14px" }}>{error}</p>
      )}

      <div style={{ display: "grid", gap: "14px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Name *"
          style={{
            width: "100%",
            padding: "12px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "14px",
          }}
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Phone *"
          style={{
            width: "100%",
            padding: "12px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "14px",
          }}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Email *"
          style={{
            width: "100%",
            padding: "12px 14px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {editingId ? "Save Contact" : "Add Contact"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={onCancel}
            style={{
              padding: "10px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;