import * as React from 'react';
import styles from '../styles/main.less';

export class TechComponent extends React.Component {
    render(){
        return (
            <div>
                <h2>Technical Proficiencies</h2>
                <h4>Daily Usage</h4>
                <ul className={styles.techList}>
                    <li>JavaScript (ES7)</li>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>JSX</li>
                    <li>Git</li>
                    <li>JIRA</li>
                    <li>HTML 5</li>
                    <li>CSS3</li>
                    <li>LESS</li>
                    <li>Node.js</li>
                    <li>Jest</li>
                    <li>Chai</li>
                    <li>Enzyme</li>
                </ul>
                <h4>Weekly Usage</h4>
                <ul className={styles.techList}>
                    <li>C#</li>
                    <li>Microsoft SQL Server</li>
                    <li>Mercurial</li>
                    <li>Adobe Creative Suite (Photoshop, Illustrator, XD)</li>
                    <li>Mocha</li>
                </ul>
                <h4>Monthly Usage</h4>
                <ul className={styles.techList}>
                    <li>Webpack</li>
                    <li>VB</li>
                    <li>jQuery</li>
                </ul>
                <h4>Have Used in the Past</h4>
                <ul className={styles.techList}>
                    <li>Java</li>
                    <li>VBScript</li>
                    <li>Legacy ASP</li>
                    <li>AngularJS</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>SASS</li>
                    <li>CoffeeScript</li>
                    <li>6502 Assembly</li>
                </ul>
            </div>
        )
    }
}
