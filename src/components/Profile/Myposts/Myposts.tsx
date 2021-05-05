import React, {ChangeEvent} from "react";
import s from './Myposts.module.css'
import {Posts} from "./Post/Posts";
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

    let postsElements = props.state.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value})
        // props.updateNewPostText(newPostElement.current.value)
    }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //      props.updateNewPostText(newPostElement.current.value)        Вернуться к этому моменту!!!!!!!!
    // }

    return (
        <div className={s.content}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>

    )
}