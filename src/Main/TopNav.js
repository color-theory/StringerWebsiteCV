import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import styles from '../styles/main.less';

const myNav =[
    {text:'About Me', url:'/about'},
    {text:'Education', url:'/edu'},
    {text:'Tech', url:'/tech'},
    {text:'Links', url:'/links'},
    {text:'Contact', url:'/contact'}
]
const TopNavComponent = (props) => (
    <nav className={styles.topNavContainer}>
        <ul className={styles.navList}>
            {myNav.map((item, index) => <li key={index} className={item.url===props.selectedPage ? styles.active : ''}><Link to={item.url} >{item.text}</Link></li>)}
        </ul>
    </nav>
)

const mapStateToProps = (state) => {
    return { selectedPage: state.pageReducer.selectedPage };
  };

export default connect(mapStateToProps)(TopNavComponent)