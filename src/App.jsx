import Bio from "./Bio";
import Greeting from "./Greeting";
import Counter from "./Counter";
import Hobbies from "./Hobbies";


function App() {
  return (
    <div style={styles.container}>
      <Bio 
        name="Karishma KP" 
        age="22" 
        description="I am learning React Components & Props." 
      />

      <Greeting name="Karishma" />

      <Counter />

      <Hobbies list={["Reading", "Coding", "Music", "Cooking"]} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    gap: "20px",
  }
};

export default App;
