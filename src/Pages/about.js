import * as React from 'react';
import styles from '../styles/main.less';

export class AboutComponent extends React.Component {
    render(){
        return (
            <div>
                <p><img className={styles.mobileImgRight} src="/img/john-sq.jpg" alt='John is too happy in this Photo.'/>Hello! Thanks for 
                taking a look at this site. I hope you're doing well. As you can probably tell from the header, my name
                is John and I am a software engineer. This site was made to house my CV but also as an example of my skills as a web developer. 
                You can find the code for this site in my github. Feel free to take a look!</p>

                <p>I have been into software development for almost as long as I can remember. My first experience programming was on the 
                Commodore 64 with MS-Basic, where I learned that I could make computers do what I want with a little bit of effort. Since 
                then, my interests have evolved over the years, but I've always had a special place in my heart for creating.</p>
            </div>
        )
    }
}
