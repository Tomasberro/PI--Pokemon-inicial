import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'
import logo from '../assets/pikachu.gif'
export function Landing(){
return (
    <div className={styles.contenedor}>
        <h1> Bienvenidos Pokemoiners</h1>
       <Link to= '/home'>
           <button className={styles.buttonland}>Comenzar</button></Link> 
         <img src={logo} alt="Loading..." className={styles.logofeat} /> 
    </div>
)

}
export default Landing;