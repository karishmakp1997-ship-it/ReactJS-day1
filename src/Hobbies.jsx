function Hobbies({ list }) {
  return (
    <div style={styles.box}>
      <h2>Hobbies Component</h2>
      <ul style={styles.ul}>
        {list.map((hobby, index) => (
          <li key={index} style={styles.li}>{hobby}</li>
        ))}
      </ul>
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
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  li: {
    padding: "5px",
    background: "#eee",
    marginBottom: "5px",
    borderRadius: "5px"
  }
};

export default Hobbies;
