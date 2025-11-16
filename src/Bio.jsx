function Bio({ name, age, description }) {
  return (
    <div style={styles.box}>
      <h2>Bio Component</h2>
      <p><b>Name:</b> {name}</p>
      <p><b>Age:</b> {age}</p>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  box: {
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    margin: "10px",
    width: "300px",
  }
};

export default Bio;
