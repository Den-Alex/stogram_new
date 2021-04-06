import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import { DialogItem, DialogItemType } from './DialogItem/DialogItem';
import {Message, MessageType} from './Message/Message';

export type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export function Dialogs(props: DialogsType) {
    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}