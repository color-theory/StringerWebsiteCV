import * as React from 'react';

export class AboutComponent extends React.Component {
    render(){
        return (
            <div>
                <h2>About Me</h2>
                <p><img className={'mobileImgRight'} width="" height="" src="/img/john-sq.jpg" alt='John is too happy in this Photo.'/>Hello! Thanks for 
                taking a look at this site. My name is John and I am a software engineer. This was made as a quick demonstration of 
                my web development experience. You can find the code for this site in my <a href="https://github.com/color-theory/">github</a>. Feel free to take a look!</p>

                <p>I have been into software development for almost as long as I can remember. My first experience programming was on the 
                Commodore 64 with MS-Basic, where I learned that I could make computers do what I want with a little bit of effort. Since 
                then, my interests have evolved over the years, but I've always had a special place in my heart for creating.</p>

                <p>In my free time, I like to play retro video games, paint, make music, and study Japanese.</p>
            </div>
        )
    }
}
