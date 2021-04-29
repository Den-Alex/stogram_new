import React, {ChangeEvent} from "react";
import s from './Myposts.module.css'
import {Posts} from "./Post/Posts";
import {ActionTypes, AddPostActiveType, ChangeNewTextActionType, ProfilePageType,} from "../../../redux/store";
import {addActionPostCreator, UPDATE_NEW_POST_TEXT} from "../../../redux/profile-reducer";

export type MypostsType = {
    state: ProfilePageType
    newPostText: string
    dispatch: (action: ActionTypes) => void
}



export function Myposts(props: MypostsType) {

    let postsElements = props.state.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let AddPost = () => {
        props.dispatch(addActionPostCreator(props.newPostText));
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value })
    }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value});
    // }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.dispatch(updateNewPostTextActionCreator(props.n));
    // }
    return (
        <div className={s.content}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>

    )
}