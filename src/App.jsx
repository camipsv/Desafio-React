
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";


const App = () => {
    return (
    <>
    <Navbar />
    <Register/>
    <Login/>
    {/* <Home /> */}
    <Footer />
    </>
    )
}

export default App;