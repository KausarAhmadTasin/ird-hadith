import Hadiths from "./components/Hadiths";
import Navtop from "./components/Navtop";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="z-10">
        {" "}
        <Navtop />
      </div>
      <Sidebar />
      <Hadiths />
    </>
  );
}

export default App;
