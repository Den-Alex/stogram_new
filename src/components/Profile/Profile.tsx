import React from "react";
import { Myposts } from "./Myposts/Myposts";
import s from './Profile.module.css'
import {Profileinfo} from "./Profileinfo/Profileinfo";

export function Profile() {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <Myposts/>
        </div>
    )
}