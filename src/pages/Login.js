import React, { useState, useEffect } from "react";
import logoImg from "../assets/logo-devaria-01.svg";
import sun from '../assets/Sun.svg'
import toast, { Toaster } from 'react-hot-toast';
import { TiMail } from 'react-icons/ti';
import { AiOutlineLock } from 'react-icons/ai';
import visibleEye from '../assets/visibility_light.svg'
import invisibleEye from '../assets/not_visibility_light.svg'
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";
import ActionCreators from '../redux/actionCreators';
import { useSelector } from 'react-redux';
import styles from '../styles/pages/Login.module.css';

function Login()
{
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const history = useHistory();
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit()
  {
    dispatch(ActionCreators.signinRequest(email, password))
  }

  useEffect(() =>
  {
    if (auth.isAuth)
    {
      if (auth.user.role === 'admin') return history.push("/admin")

      return history.push('/')
    }

    if (auth.error)
    {
      toast(auth.errorMessage, {
        duration: 4000,
        position: 'top-center',
        style: {
          color: '#fff',
          backgroundColor: '#5E49FF'
        },
        icon: '❌',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  }, [auth])

  function togglePasswordVisibility()
  {
    if (!isPasswordShown)
    {
      setPasswordShown(true);
    } else
    {
      setPasswordShown(false);
    }
  }

  return (
    <div id={styles.pageLogin}>
      <div className={styles.container}>
        <Toaster />
        <div id={styles.logoContainer}>
          <img src={logoImg} alt="logo" />
          <h1>Fazer login</h1>
          <div></div>
        </div>

        <div id={styles.login}>
          <div id={styles.sun}>
            <div>
              <img src={sun} alt="Sun" />
            </div>
          </div>
          <div className={styles.form}>
            <div>
              <TiMail color="#25cbd3" />
              <div id={styles.inputDiv}>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  value={email}
                  onChange={(e) =>
                  {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div id={styles.eye} >
                <div></div>
              </div>
            </div>
            <div>
              <AiOutlineLock color="#25cbd3" />
              <div id={styles.inputDiv}>
                <input
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) =>
                  {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div id={styles.eye} onClick={togglePasswordVisibility}>
                {isPasswordShown ? (
                  <img src={visibleEye} alt="eye" />
                ) : (
                  <img src={invisibleEye} alt="eye" />
                )}
              </div>

            </div>
            <button type="submit" onClick={onSubmit}>
              Entrar
            </button>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}></div>
        <div className={styles.col} ></div>
        <div className={styles.col} ></div>
        <div className={styles.col} ></div>
        <div className={styles.col} ></div>
      </div>
    </div>
  );
}

export default Login;
