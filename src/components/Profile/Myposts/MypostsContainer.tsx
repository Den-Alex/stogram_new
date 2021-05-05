import React, {ChangeEvent} from "react";
import s from './Myposts.module.css'

import {ActionTypes, AddPostActiveType, ChangeNewTextActionType, ProfilePageType,} from "../../../redux/store";
import {addActionPostCreator, UPDATE_NEW_POST_TEXT} from "../../../redux/profile-reducer";

export type MypostsType = {
    state: ProfilePageType
    newPostText: string
    dispatch: (action: ActionTypes) => void
    addPost: () => void
    updateNewPostText: (newPostElement: any) => void
}


export function Myposts(props: MypostsType) {




    let addPost = () => {
        props.dispatch(addActionPostCreator(props.newPostText));
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value})
    }

    return (
        <Myposts state={props.state} newPostText={props.newPostText} dispatch={props.dispatch} addPost={addPost} updateNewPostText={onPostChange}/>

    )
}