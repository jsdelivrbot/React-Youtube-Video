//Create newComponent
//some <html>
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>Hi!</div>;
}


// Take this component generate html
//on the page(in the DOM)

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);