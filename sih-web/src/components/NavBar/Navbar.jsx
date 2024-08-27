import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-scroll';


const Navbar = ()=>{
    return (
        <div className={styles.navbarcomp}>
            <div className={styles.images}>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className={styles.navbar}>
                <Link><p>Home</p></Link>
                <Link><p>About Us</p></Link>
                <Link><p>Documents</p></Link>
                <Link><p>Notifications</p></Link>
                <Link><p>Acts&Rules</p></Link>
                <Link><p>Tools&Help</p></Link>
            </div>
        </div>
    )
}

export default Navbar