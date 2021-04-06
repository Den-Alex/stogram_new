import React from "react";
import s from "./Posts.module.css";

export type PostsType = {
    message: string
    likesCount: number
    id: number
}

export function Posts(props: PostsType) {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxmbuoJUbGp6sdLBKHqPhi1NmOMumKIWtIg&usqp=CAU"/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}