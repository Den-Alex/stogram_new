import {SenMessageCreatorType, UpdateNewMessageBodyCreatorType} from "./store";
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


export const dialogsReducer = (state: any, action: any) => {
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