import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductView from "./Pages/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/product/:slug" element ={ <ProductView/>}/>
        <Route path="/" element ={ <Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
