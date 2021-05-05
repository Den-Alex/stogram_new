import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type AddPostActiveType = {
    type: "ADD-POST"
    newPostText: string
}
export type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageBodyCreatorType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    body: string
}
export type SenMessageCreatorType = {
    type: "SEND-MESSAGE"
}
export type ActionTypes =
    AddPostActiveType
    | ChangeNewTextActionType
    | UpdateNewMessageBodyCreatorType
    | SenMessageCreatorType

export type StoreType = {
    _state: StateType
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'YOU', likesCount: 10},
                {id: 2, message: 'YYYYY', likesCount: 12},
            ],
            newPostText: "Deniska"
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    callSubscriber() {
        console.log("hello")
    },
    subscribe(observer: () => void) {
        this.callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this.callSubscriber();
    }
}





