import React from "react";
import {Myposts} from "./Myposts/Myposts";
import s from './Profile.module.css'
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}
export function Profile(props: ProfileType) {


    return (
        <div className={s.content}>
            <Profileinfo/>
            <Myposts state={props.profilePage}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}

            />
        </div>
    )
}