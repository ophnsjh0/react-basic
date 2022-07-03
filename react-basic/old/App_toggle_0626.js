import {useState,  useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("hi:");
    return () => {
      console.log("bye:")
    }
  }, [])
  return <h1>Hello ~ !!  ^^:</h1>
}

function App() {
  const [view, setView] = useState(false);
  const onClick = () => {
    setView((prev) => !prev);
  } 
  return (
    <div>
      {view ? <Hello /> : null}
      <button onClick={onClick}>{view ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
