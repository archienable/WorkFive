import './App.css';
import Nav from "./Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Nav/Elements/Home/Home";
import MyStores from "./Nav/Elements/MyStores/MyStores";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/myStores' element={<MyStores />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
