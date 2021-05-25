import React, {ChangeEvent} from "react";
import s from './Myposts.module.css'

import {
    ActionTypes,
    AddPostActiveType,
    ChangeNewTextActionType,
    ProfilePageType, StateType,
    StoreType,
} from "../../../redux/store";
import {
    addActionPostCreator,
    UPDATE_NEW_POST_TEXT,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {Myposts} from "./Myposts";
import {connect} from "react-redux";

export type MypostsContainerType = {
    state: ProfilePageType
    newPostText: string
    dispatch: (action: ActionTypes) => void
    // updateNewPostText: (newPostElement: any) => void
    store: StoreType
}

const mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextActionCreator(e))
        },
        addPost: () => {
            dispatch(addActionPostCreator(state.profilePage.newPostText)) //не передается NewText
        }
    }
}


export const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
