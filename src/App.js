import "./App.css";
import Body from "./Components/Body";
import appStore from "./utilis/appStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        
           <Body />
        
       
      </Provider>
    </div>
  );
}

export default App;
