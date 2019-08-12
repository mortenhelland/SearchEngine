import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentsDetail from './CommentsDetail';

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentsDetail author ="Sam"/>
            <CommentsDetail author = "Alex"/>
            <CommentsDetail author = "Jane"/>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));