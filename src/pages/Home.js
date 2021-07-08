import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Module from '../components/Module'
import Classes from '../components/Classes'
import Footer from '../components/Footer'
import moduleImage from '../assets/icon_classActive.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import ActionCreators from '../redux/actionCreators';

import styles from '../styles/pages/Home.module.css';

export default function Home()
{
  const dispatch = useDispatch();
  const { auth, Modules, classes } = useSelector((state) => state);
  const [isUser] = useState(auth.user);


  useEffect(() =>
  {
    dispatch(ActionCreators.getModulesRequest())
    dispatch(ActionCreators.getTotalClassesRequest())
  }, [])

  if (!auth.isAuth)
  {
    return <Redirect to="/login" />
  }
  if (auth.user.role === 'admin') return <Redirect to="/admin" />

  return (
    <>
      <Header isUser={isUser} />
      <div className={styles.container}>
        <Module modules={Modules.data} />
        <div className={styles.secondContainer}>
          <div className={styles.module}>
            <img src={moduleImage} alt="module" />
            <div>
              <h1>
                {Modules.module[0]?.name}
              </h1>
              <p>
                Todas as aulas disponíveis nesse módulo:
              </p>
            </div>
          </div>
          <Classes classes={classes.data} />
        </div>
        <Footer />
      </div>
      <div className={styles.row}>
        <div className={styles.col}></div>
        <div className={styles.col} ></div>
        <div className={styles.col} ></div>
        <div className={styles.col} ></div>
        <div className={styles.col} ></div>
      </div>
    </>

  )
}
