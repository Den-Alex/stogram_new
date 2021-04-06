import React from "react";
import s from "./Message.module.css";


export type MessageType = {
    message: string
    id: number
}

export function Message(props: MessageType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}