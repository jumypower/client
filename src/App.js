import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
