import React from "react";
import s from "./Posts.module.css";

export type MessageType = {
    message: string
}

export function Posts(props: MessageType) {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxmbuoJUbGp6sdLBKHqPhi1NmOMumKIWtIg&usqp=CAU"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}