import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost, StateType, updateNewPostText} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={AddPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>, document.getElementById('root'));
}




