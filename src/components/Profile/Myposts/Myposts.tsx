import React, {ChangeEvent} from "react";
import s from './Myposts.module.css'
import {Posts} from "./Post/Posts";
import {ProfilePageType} from "../../../redux/state";

export type MypostsType = {
    state: ProfilePageType
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export function Myposts(props: MypostsType) {

    let postsElements = props.state.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let AddPost = () => {
            props.addPost(props.newPostText);
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.content}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}/>
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