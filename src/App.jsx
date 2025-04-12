// HITO 1 al 4
// import Navbar from "./components/Navbar"
// // import Home from "./components/Home"
// import Footer from "./components/Footer"
// // import Cart from "./components/Cart";
// // import Register from "./components/Register";
// // import Login from "./components/Login";
// import Pizza from "./pages/Pizza";


// const App = () => {
//     return (
//     <>
//     <Navbar />
//     {/* <Register/> */}
//     {/* <Login/> */}
//     {/* <Home /> */}
//     {/* <Cart /> */}
//     <Pizza />
//     <Footer />
//     </>
//     )
// }

// export default App;



// HITO 5
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

function App() {
    return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
    )
}

export default App
