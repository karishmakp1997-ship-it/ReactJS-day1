function Greeting({ name }) {
  return (
    <div style={{
      background: "#d2f8d2",
      padding: "20px",
      borderRadius: "10px",
      margin: "10px",
      width: "300px"
    }}>
      <h2>Greeting Component</h2>
      <p>Hello, {name}!</p>
    </div>
  );
}

export default Greeting;
