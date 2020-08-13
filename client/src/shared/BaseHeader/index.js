import React from "react";

import { Link } from "react-router-dom";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { removeToken } from "../../api/tokenCreator";

import "./style.scss";
import { history } from "../..";

const BaseHeader = () => {
  const logOutUser = () => {
    removeToken();
    history.push("/auth");
  };

  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/">
          <img src={require("../../assets/image/logo.png")} alt="" />
        </Link>
      </div>

      <nav className="header_navigation">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/addedit">Добавить тренеровку</Link>
          </li>
        </ul>
      </nav>

      <ExitToAppIcon onClick={() => logOutUser()} className="logout_button" />
    </header>
  );
};

export default BaseHeader;
