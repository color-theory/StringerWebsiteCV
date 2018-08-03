import * as React from 'react';

export class LinksComponent extends React.Component {
    render(){
        return (
            <div>
                <h2>External Links</h2>
                <p>There are only a few here, but I thought they might be useful!</p>
                <ul>
                    <li><a href="https://github.com/subcogitate/">github</a></li>
                    <li><a href="https://www.linkedin.com/in/john-stringer-63780279/">linkedin</a></li>
                </ul>
            </div>
        )
    }
}
