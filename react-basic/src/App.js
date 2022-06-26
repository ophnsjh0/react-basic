import Button from "./Button";
import styles from "./App.module.css";
// import styles2 from "./Button.module.css";
import {useState,  useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  useEffect(() => {
    console.log("only once")}, []);
  useEffect(() => {
    console.log("change conter")}, [counter]);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("change Keyword")
      }
    }, [keyword]);
  useEffect(() => {
    console.log("change Keyword & counter")}, [keyword, counter]);
  return (
    <div>
      <input value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search Keyword"/>
      <h1 className={styles.title}>{counter}</h1>
      {/* <button className={styles2.Btn} onClick={onClick}>Click plz</button>  */}
      <Button text={"Click me"} onClick={onClick} />
    </div>
  );
}

export default App;
