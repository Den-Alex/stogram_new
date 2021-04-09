import React from "react";
import {Myposts} from "./Myposts/Myposts";
import s from './Profile.module.css'
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {ProfilePageType} from "../../redux/state";

export type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}
export function Profile(props: ProfileType) {


    return (
        <div className={s.content}>
            <Profileinfo/>
            <Myposts state={props.profilePage}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}