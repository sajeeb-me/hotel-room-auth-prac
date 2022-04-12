import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Body/Home/Home';
import Rooms from './components/Body/Rooms/Rooms';
import Registration from './components/Body/Registration/Registration';
import Login from './components/Body/Login/Login';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer'
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={
          <RequireAuth>
            <Rooms />
          </RequireAuth>
        } />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
