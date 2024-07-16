import logo from './logo.svg';
import styles from "./index.css"
import { Routes, Route} from 'react-router-dom'
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import Users from "./Users";
import Sidebar from "./sideBar";
import React from "react";
import ListingPage from "./ListingPage";
import CreateMerchant from "./CreateMerchant";
import MerchantPage from "./MerchantPage";

function App() {
  return (
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/page2" element={<Login/>} />
            <Route path="/page3" element={<ListingPage/>} />
            <Route path="/page4" element={<MerchantPage/>} />
        </Routes>
  );
}

export default App;
