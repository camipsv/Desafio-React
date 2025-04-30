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



// HITO 5-8
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute";
import { useUser } from "./context/UserContext";



function App() {
    const { token } = useUser();
    return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
        path="/profile"
        element={
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
            }
        />
        <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
    );
}

export default App;
