import * as React from 'react';

export class EduComponent extends React.Component {
    render(){
        return (
            <div>
                <h2>Education</h2>

                <h4>The University of Kansas <em>Lawrence, KS</em></h4>
                <ul>
                    <li>Bachelor of Arts in Fine Arts, 2016</li>
                </ul>

                <h4>Kansai University <em>Osaka, Japan</em></h4>
                <ul>
                    <li>Intensive Japanese Language and Culture Program(Bekka) 2012-2013</li>
                </ul>

                <h4>Pinnacle Career Institute <em>Kansas City, MO</em></h4>
                <ul>
                    <li>Associate of Applied Science in Electronics, 2004</li>
                    <li>Graduated with Honors</li>
                </ul>
            </div>
        )
    }
}
