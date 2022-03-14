import * as React from 'react';
import { Link, useLocation } from 'react-router-dom'

const myNav =[
    {text:'About Me', url:'/about'},
    {text:'Education', url:'/edu'},
    {text:'Tech', url:'/tech'},
    {text:'Links', url:'/links'},
]

const TopNavComponent = () => {
    const location = useLocation();

    return (
        <nav className={'topNavContainer'}>
            <ul className={'navList'}>
                {myNav.map((item, index) => <li key={index} className={(item.url===location.pathname || (item.url === '/about' && location.pathname === '/' )) ? 'active' : ''}><Link to={item.url} >{item.text}</Link></li>)}
            </ul>
        </nav>
    );
}

export default TopNavComponent;
