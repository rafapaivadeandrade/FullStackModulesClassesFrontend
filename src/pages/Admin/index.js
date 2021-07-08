import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Module from '../../components/Module'
import Classes from '../../components/Classes'
import Footer from '../../components/Footer'
import { useHistory } from 'react-router-dom'
import moduleImage from '../../assets/icon_classActive.svg'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ActionCreators from '../../redux/actionCreators';

import styles from '../../styles/pages/Home.module.css';

export default function AdminHome()
{
  const dispatch = useDispatch();
  const { auth, Modules, classes } = useSelector((state) => state);
  const [isAdmin] = useState(auth.user);
  const history = useHistory()

  useEffect(() =>
  {
    dispatch(ActionCreators.getModulesRequest())
    dispatch(ActionCreators.getTotalClassesRequest())
  }, [])

  return (
    <>
      <Header isAdmin={isAdmin} />
      <div className={styles.container}>
        <Module isAdmin={isAdmin} modules={Modules.data} />
        <div className={styles.secondContainer}>
          <div className={styles.module}>
            <img src={moduleImage} alt="module" />
            <div>
              <h1>
                {!isAdmin && (<span>{Modules.module[0]?.name}</span>)}
                {isAdmin && (<><span>{Modules.module[0]?.name} Classes</span>
                  <BsFillPlusSquareFill color="#25cbd3" onClick={() => history.push('/createClass', { isAdmin: isAdmin, module: Modules.module[0] })} /></>)}
              </h1>
              <p>
                Todas as aulas disponíveis nesse módulo:
              </p>
            </div>
          </div>
          <Classes isAdmin={isAdmin} classes={classes.data} module={Modules.module[0]} />
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
