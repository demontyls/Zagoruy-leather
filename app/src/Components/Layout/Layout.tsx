import React, {useContext, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.scss'
import {LangContext} from "../../Providers/Lang-provider/Lang-provider";

const Layout = () => {
  const {strings,isRussian, setIsRussian} = useContext(LangContext);

  return (
    <div className="main-layout">
      <nav className="navbar navbar-light fixed-top bg-light px-3">
        <NavLink className="navbar-brand" to="/history">{strings.history}</NavLink>
        <NavLink className="navbar-brand" to="/main">{strings.main}</NavLink>
        <NavLink className="navbar-brand" to="/profile">{strings.second_menu}</NavLink>
        <div>
        <button className="btn btn-outline-primary d-flex align-items-center" onClick={()=> setIsRussian(!isRussian)}>
          {strings.change_name} -
          <strong className="ms-1">
            {!isRussian ? strings.russian : strings.english}
          </strong>
        </button>
        </div>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        {strings.footer_text}
      </footer>
    </div>
  );
};

export default Layout;