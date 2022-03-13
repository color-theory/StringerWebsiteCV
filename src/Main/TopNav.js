import * as React from 'react';
import { Link } from 'react-router-dom'
import styles from '../styles/main.less';

const myNav =[
    {text:'About Me', url:'/about'},
    {text:'Education', url:'/edu'},
    {text:'Tech', url:'/tech'},
    {text:'Links', url:'/links'},
]
const TopNavComponent = () => (
    <nav className={styles.topNavContainer}>
        <ul className={styles.navList}>
            {myNav.map((item, index) => <li key={index} className={item.url==='/about' ? styles.active : ''}><Link to={item.url} >{item.text}</Link></li>)}
        </ul>
    </nav>
)

export default TopNavComponent;
