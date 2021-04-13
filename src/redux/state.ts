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
export type ChangeNewTextActionType ={
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionTypes = AddPostActiveType | ChangeNewTextActionType
export type StoreType = {
    _state: StateType
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}
export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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
            ]
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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this.callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT ) {
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber();
        }
    }

}
export let addActionPostCreator = (newPostText: string): AddPostActiveType => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}
export let updateNewPostTextActionCreator = (newText: string): ChangeNewTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}



