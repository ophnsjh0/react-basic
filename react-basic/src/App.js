import Button from "./Button";
import styles from "./App.module.css";
import styles2 from "./Button.module.css";
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      {/* <button className={styles2.Btn} onClick={onClick}>Click plz</button>  */}
      <Button text={"Click me"} onClick={onClick} />
    </div>
  );
}

export default App;
