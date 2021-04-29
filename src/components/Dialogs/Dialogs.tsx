import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType,StoreType} from "../../redux/store";
import {senMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {
    state: DialogsPageType
    store:StoreType
}

export function Dialogs(props: DialogsPropsType) {
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
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageText}
                                  placeholder="Enter"
                                  onChange={onSendMessageChange}>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}