function Counter() {
  return (
    <div style={styles.counterBox}>
      <h2>Counter Component</h2>
      <p style={{ fontSize: "24px", marginBottom: "10px" }}>0</p>
      <button style={styles.btn}>Increase</button>
    </div>
  );
}

const styles = {
  counterBox: {
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    margin: "10px",
    width: "300px",
    textAlign: "center"
  },
  btn: {
    padding: "8px 15px",
    borderRadius: "8px",
    border: "none",
    background: "lightblue",
    cursor: "pointer"
  }
};

export default Counter;
