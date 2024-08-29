import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css';

const HomePage = () =>{
    return(
        <div>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <footer>
            <Link to="/services" className={styles.link}>
                <button className={styles.button}>View Services</button>
            </Link>                
            <Link to="/contactus" className={styles.link}>
                <button className={styles.button}>contactus</button>
            </Link>                
            </footer>
        </div>
    )
}

export default HomePage