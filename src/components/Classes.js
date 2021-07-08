import React from 'react'
import playButton from '../assets/icon_play_dark.svg'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ActionCreators from '../redux/actionCreators';
import styles from '../styles/components/Classes.module.css'
export default function Classes({ isAdmin, classes, module })
{
  const dispatch = useDispatch();

  const history = useHistory()
  return (
    <div className={styles.classes}>
      {classes.length === 0 && (
        <>
          <p>Nenhuma classe disponível</p>
        </>
      )}
      {classes.map(classes => (
        <div key={classes.id} className={styles.class}>
          <h1>{classes.name}</h1>
          <div className={styles.image}>
            <img src={playButton} alt="play" />
          </div>
          <button >Assistir aula</button>
          <div className={isAdmin ? styles.adminIconDate : styles.date}>
            {isAdmin && (
              <div className={styles.adminIcons}>
                <BsFillPlusSquareFill color="#a191ff" onClick={() => history.push('/createClass', { isAdmin: isAdmin, module: module })} />
                <AiFillEdit color="#a191ff" onClick={() => history.push('/updateClass', { isAdmin: isAdmin, classId: classes.id })} />
                <AiFillDelete color="#a191ff" onClick={() => { dispatch(ActionCreators.removeClassRequest(module.id)) }} />
              </div>
            )}
            <p>{classes.created}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
