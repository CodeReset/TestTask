import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import BottomNavigations from "../../components/BottomNavigations";
import CopyRight from "../../components/copyRight";

import AuthSignUp from "./helpers/AuthSignUp";
import AuthSignIn from "./helpers/AuthSignIn";

import { authSighIn, authSighUp } from "../../store/actions/auth";
import * as types from "../../store/types/auth";

const Authentification = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.currentTab);

  const setValueControl = (value) => {
    dispatch({ type: types.AUTHTABCHANGER, payload: value });
  };

  const handleSignInSubmit = (username, password) => {
    dispatch(authSighIn(username, password));
  };

  const handleSignUpSubmit = (username, email, password) => {
    dispatch(authSighUp(username, email, password));
  };

  return (
    <>
      <div className="container_auth">
        <BottomNavigations
          valueControl={auth}
          setValueControl={setValueControl}
        />
        <div className="form_block">
          {auth === "signin" ? (
            <AuthSignIn handleSubmit={handleSignInSubmit} />
          ) : (
            <AuthSignUp handleSubmit={handleSignUpSubmit} />
          )}
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Authentification;
