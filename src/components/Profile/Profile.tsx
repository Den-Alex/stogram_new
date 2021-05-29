import React from "react";
import s from './Profile.module.css'
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {ActionTypes, ProfilePageType, StoreType} from "../../redux/store";
import { MypostsContainer } from "./Myposts/MypostsContainer";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    store: StoreType
}
export function Profile(props: ProfileType) {


    return (
        <div className={s.content}>
            <Profileinfo/>
            <MypostsContainer dispatch={props.dispatch}
                              newPostText={props.profilePage.newPostText}
                              store={props.store}             // Вернуться к этому моменту!!!!!!!!!!
                              state={props.profilePage}
            />
        </div>
    )
}