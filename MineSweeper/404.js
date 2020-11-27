import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const NotFound =()=>{
    return(
    <div>
        <h1>Not Found</h1>
        <Link to="/">
            <button>戻る</button>
        </Link>
    </div>
    );
}

export default NotFound;