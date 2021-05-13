import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType,StoreType} from "../../redux/store";
import {senMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export type DialogsPropsType = {
    state: DialogsPageType
    store:StoreType
}
              // Это все не точно
export function DialogsContainer(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageText = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(senMessageCreator())
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }

    return (
        <Dialogs state={props.state} store={props.store}/>
    )
}