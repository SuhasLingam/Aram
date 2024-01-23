import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-black h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
