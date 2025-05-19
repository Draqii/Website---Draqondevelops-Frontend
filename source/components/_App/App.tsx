import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../o_Header/Header";
import Footer from "../o_Footer/Footer";
import FixedFooter from "../o_FixedFooter/FixedFooter";
import Gears from "../p_Settings/Settings";
import useCookie from "../../modules/hooks/useCookie";
import Main from "../p_Main/Main";
import "./App.scss";

const App = () => {

    const [bg, setBG]: any = useState(useCookie("hw_bg", "default")[0])

    return (
        <div className="hw_app">
            <Header />
            <main className="hw_app__page">
                <Routes>
                    <Route path="/" element={  <Main bg={bg} setBG={setBG} /> }></Route>
                    <Route path="/settings" element={ <Gears setBG={setBG} /> } />
                </Routes>
            </main>
            <Footer />
            <FixedFooter />
        </div>
    )
}
export default App