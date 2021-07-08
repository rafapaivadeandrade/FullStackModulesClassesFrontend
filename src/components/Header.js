import React from 'react'
import logo from '../assets/logo-devaria-01.svg'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ActionCreators from '../redux/actionCreators';
import styles from '../styles/components/Header.module.css'
export default function Header({ isAdmin, isUser })
{
  const dispatch = useDispatch();
  function logout()
  {
    dispatch(ActionCreators.destroyAuthRequest())
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.adminDiv}>
        {isAdmin && (
          <p>
            Hello, {isAdmin.name}
          </p>
        )}
        {isUser && (
          <p>
            Hello, {isUser.name}
          </p>
        )}
        <Link to="/login">Entrar</Link>
        <Link to="/login" onClick={logout}>Sair</Link>
      </div>
    </div>
  )
}
