import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: string
}
export type MessageType = {
    message: string
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export function Message(props: MessageType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Den" id="1"/>
                <DialogItem name="Marina" id="2"/>
                <DialogItem name="Elena" id="3"/>
                <DialogItem name="Meri" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message="YYYYY"/>
                <Message message="UUUUU"/>
                <Message message="OOOOO"/>
                <Message message="FFFFF"/>
            </div>
        </div>
    )
}