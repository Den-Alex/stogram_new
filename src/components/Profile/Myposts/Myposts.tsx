import React from "react";
import s from './Myposts.module.css'
import {Posts, PostsType} from "./Post/Posts";

export type MypostsType = {
    posts: Array<PostsType>
}


export function Myposts(props: MypostsType) {

    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id} />)
    return (
        <div className={s.content}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>

    )
}