import React, {ChangeEvent} from "react";
import s from './Myposts.module.css'

import {
    ActionTypes,
    AddPostActiveType,
    ChangeNewTextActionType,
    ProfilePageType,
    StoreType,
} from "../../../redux/store";
import {addActionPostCreator, UPDATE_NEW_POST_TEXT} from "../../../redux/profile-reducer";
import { Myposts } from "./Myposts";

export type MypostsContainerType = {
    state: ProfilePageType
    newPostText: string
    dispatch: (action: ActionTypes) => void
    // updateNewPostText: (newPostElement: any) => void
    store: StoreType
}


export function MypostsContainer(props: MypostsContainerType) {




    let addPost = () => {
        props.store.dispatch(addActionPostCreator(props.store._state.profilePage.newPostText));
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch({type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value})
    }

    return (
        <Myposts state={props.state}                  // Вернуться к этому моменту!!!!!!!!!!
                 newPostText={props.newPostText}
                 dispatch={props.store.dispatch}
                 addPost={addPost}
                 updateNewPostText={onPostChange}/>

    )
}