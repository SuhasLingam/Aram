import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-black h-[100%]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
