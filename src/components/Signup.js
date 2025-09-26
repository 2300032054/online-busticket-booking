import React from "react";

export default function Signup() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📝 Signup</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button style={styles.button}>Signup</button>
        </form>
        <p style={styles.note}>Already have an account? <a href="/login" style={styles.link}>Login</a></p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", marginTop: "50px" },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    background: "#fff",
    textAlign: "center",
  },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    background: "linear-gradient(90deg, #6200ea, #9c27b0)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  note: { marginTop: "15px", fontSize: "14px" },
  link: { color: "#6200ea", textDecoration: "none" },
};
