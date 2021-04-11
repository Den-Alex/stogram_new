import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionTypes, StateType} from "./redux/state";

type AppType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

function App(props: AppType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                          dispatch={props.dispatch}
            />}/>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        </div>
    );
}

export default App;
