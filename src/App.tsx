import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostsType} from "./components/Profile/Myposts/Post/Posts";

export type AppType = {
    posts: Array<PostsType>
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
function App(props: any ) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path='/profile' render={ () => <Profile posts={props.state.posts}/> }/>
                <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/> }/>
            </div>
        </BrowserRouter>
    );
}

export default App;
