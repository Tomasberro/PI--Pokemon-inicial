import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'
export function Landing(){
return (
    <div>
        <h1> Bienvenidos pokemoiners</h1>
       <Link to= '/home'>
           <button className={styles.buttonland}>Comenzar</button></Link> 
    </div>
)

}
export default Landing;