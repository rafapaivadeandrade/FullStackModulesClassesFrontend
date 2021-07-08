import React from 'react'
import logo from '../assets/logo-devaria-01.svg'
import { Link } from "react-router-dom";
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaSpotify } from 'react-icons/fa'
import styles from '../styles/components/Footer.module.css'

export default function Footer()
{
  return (
    <div className={styles.footer}>
      <span></span>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div style={{ marginTop: '30px' }}>
        <p>
          © Copyright 2021 Devaria. Todos os direitos reservados.
        </p>
      </div>

      <div className={styles.media}>
        <AiFillYoutube color="#25cbd3" size={50} />
        <AiFillInstagram color="#25cbd3" size={50} />
        <AiFillLinkedin color="#25cbd3" size={50} />
        <FaSpotify color="#25cbd3" size={50} />
      </div>
    </div>
  )
}
