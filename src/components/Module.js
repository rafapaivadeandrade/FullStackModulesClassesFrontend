import React from 'react'
import moduleImage from '../assets/icon_classActive.svg'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ActionCreators from '../redux/actionCreators'
import styles from '../styles/components/module.module.css'
export default function Module({ isAdmin, modules })
{
  const dispatch = useDispatch();
  const history = useHistory()
  const { classes } = useSelector((state) => state);

  function getClassesAndModules(moduleId)
  {
    dispatch(ActionCreators.getModuleRequest(moduleId));
    dispatch(ActionCreators.getClassesRequest(moduleId))
  }

  return (
    <div>
      <div className={styles.moduleTitle}>
        <h1>Módulos </h1>
        {isAdmin && (<BsFillPlusSquareFill color="#25cbd3" onClick={() => history.push('/createModule', { isAdmin: isAdmin })} />)}
      </div>
      <p>Seleciona o módulo para ver as aulas disponíveis:</p>
      {modules ? (
        <div className={styles.modules}>
          {modules.map(module =>
          {
            return (
              <button key={module.id} onClick={() => { getClassesAndModules(module.id) }}>
                <img src={moduleImage} alt="module" />
                <div>
                  <h5>{module.name}</h5>
                  <div>
                    {classes.total !== 0 && (
                      <span key={classes.total}>{classes.total}/{classes.total} aulas</span>
                    )}
                    {classes.total === 0 && (
                      <span key={classes.total}>{classes.total}/{classes.total} aulas</span>
                    )}
                    {isAdmin && (
                      <>
                        <AiFillDelete color="#a191ff" onClick={() => { dispatch(ActionCreators.removeModuleRequest(module.id)) }} />
                        <AiFillEdit color="#a191ff" onClick={() => history.push('/updateModule', { isAdmin: isAdmin, moduleId: module.id })} />
                      </>
                    )}
                  </div>
                </div>
              </button>
            )
          })}

        </div>
      ) : (
        <p>Nenhum modulo disponível</p>
      )
      }
    </div >
  )
}
