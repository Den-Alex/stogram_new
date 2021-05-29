import React, {ChangeEvent} from 'react';
import {DialogsPageType, StateType, StoreType} from "../../redux/store";
import {senMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

export type DialogsPropsType = {
    state: DialogsPageType
    store: StoreType
}
// export type DialogsPropType = {
//     state: DialogsPageType
//     store: StoreType
// }


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {                            // Это все не точно
    return {
        updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
        },
        sendMessage: () => {
            dispatch(senMessageCreator())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)






