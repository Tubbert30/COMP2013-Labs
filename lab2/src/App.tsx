import './App.css'
import data from "./data/data"
import CardContainer from "./components/CardContainer"

function App() {


  return (
    <>
    <h1>Resorts Lite</h1>
    <CardContainer data={data}/>
    </>
  );
    
  
}

export default App
