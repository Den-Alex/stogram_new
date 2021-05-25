import {ActionTypes, SenMessageCreatorType, StateType, UpdateNewMessageBodyCreatorType} from "./store";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const SEND_MESSAGE = "SEND-MESSAGE";

export let updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyCreatorType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    }
}
export let senMessageCreator = (): SenMessageCreatorType => {
    return {
        type: SEND_MESSAGE
    }
}
let initialState = {
        dialogs: [
            {id: 1, name: 'Den'},
            {id: 2, name: 'Marina'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Meri'},
        ],
        messages: [
            {id: 1, message: 'YYYYY'},
            {id: 2, message: 'OOOOO'},
            {id: 3, message: 'UUUUU'},
            {id: 4, message: 'FFFF'},
        ],
        newMessageBody: ""
    };

export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}