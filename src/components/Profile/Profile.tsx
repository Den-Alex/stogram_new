import React from "react";
import {Myposts, MypostsType} from "./Myposts/Myposts";
import s from './Profile.module.css'
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {PostsType} from "./Myposts/Post/Posts";


export function Profile(props: MypostsType) {


    return (
        <div className={s.content}>
            <Profileinfo/>
            <Myposts posts={props.posts}/>
        </div>
    )
}