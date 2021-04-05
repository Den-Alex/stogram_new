import React from "react";
import s from './Myposts.module.css'
import {Posts} from "./Post/Posts";


export function Myposts() {
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
            <Posts message="You"/>
            <Posts message="YYYYY"/>
        </div>

    )
}