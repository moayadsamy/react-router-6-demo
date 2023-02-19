import { NavLink, Route } from "react-router-dom";
import "../resources/css/style.css";
let App = () => {
    return (
        <div className="content-wrapper">
        <header>
            <span>Moayad</span>
            <nav>
                <ul>
                    <li><NavLink to="/" className={(props) => (props.isActive ? "active" : "in-active")} end >Home</NavLink></li>
                    <li><NavLink to="/about" className={(props) => (props.isActive ? "active" : "in-active")} end >About</NavLink></li>
                    <li><NavLink to="/about/contact" className={(props) => (props.isActive ? "active" : "in-active")}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<span className="main-span">Home</span>} />
                <Route path="/about" element={<span className="main-span">About</span>} />
                <Route path="/about/contact" element={<span className="main-span">Contact</span>} />
            </Routes>
        </main>
        <footer>
            <span>2022 - moayad hijjo</span>
        </footer>    
    </div>

    );
};
export default App;