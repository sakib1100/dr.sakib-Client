
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Compunent/Footer';
import Header from './Compunent/Header';
import About from './Pages/About';
import Appoinment from './Pages/Appoinment';
import Booking from './Pages/Booking';
import CheckAppoinment from './Pages/CheckAppoinment';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RequireAuth from './Pages/RequireAuth';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <div>
<Header />

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/home" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/appoinment" element={<Appoinment />}></Route>
  <Route path="/checkAppoinment" element={<RequireAuth>
    <CheckAppoinment />
  </RequireAuth>}></Route>
  <Route path="/booking" element={<RequireAuth>
    <Booking />
  </RequireAuth>}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/signIn" element={<SignIn />}></Route>
</Routes>

<Footer />

    </div>
  );
}

export default App;
