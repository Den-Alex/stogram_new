import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionTypes, StateType, StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { Users } from './components/Users/Users';


type AppType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
    store: any
}

function App(props: AppType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                          dispatch={props.dispatch}
                                                          store={props.store}
            />}/>
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                                                                   state={props.state.dialogsPage}/>}/>
            <Route path='/user' render={ () => <Users/>}/>
        </div>
    );
}

export default App;
