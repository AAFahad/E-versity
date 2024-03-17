import React from 'react';
import '../index.css';

const Content = () => {
    return (
        <React.Fragment>
        <div className="content">
            <h1>Find your best <br/><span>university</span> <br/> & Course</h1>
            <p className="par">We are providing all university information 
                in one platform <br/> These may help you to choose a best university 
                </p>

                <button className="cn">JOIN US</button>

                <div className="form">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Email Here" />
                    <input type="password" name="" placeholder="Enter Password Here" />
                    <button className="btnn">Login</button>

                    <p className="link">Don't have an account<br/>
                    Sign up here</p>
                    <p className="liw">Log in with</p>

                </div>
        </div>
        </React.Fragment>
    );
};

export default Content;