import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentsDetail from './CommentsDetail';

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentsDetail />
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));