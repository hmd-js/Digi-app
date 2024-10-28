import "./App.css";
import { MiddleMenu } from "./components/MiddleMenu";
import Slider from "./components/Slider";
import { Address } from "./components/Address";
import { UserNav } from "./components/UserNav";
import { NavBar } from "./components/NavBar";
import { AmazingItems } from "./components/AmazingItems";

function App() {
  return (
    <div className="  w-screen flex flex-col  " dir="rtl">
      <div className="bg-white w-full h-40 flex flex-col p-4 divide-y-2 divide-gray-400 ">
        <NavBar />
        <UserNav />
        <Address />
      </div>
      <Slider />
      <MiddleMenu/>
      <AmazingItems/>
      
    </div>
  );

  

 

 
}

export default App;
