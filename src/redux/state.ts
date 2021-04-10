
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

export type StoreType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    onChange: () => void
    addPost: (postMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
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
            ]
        },
        sidebar: {}
    },
    onChange() {
        console.log("hello")
    },
    addPost(postMessage: string) {
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this.onChange();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.onChange();
    },
    subscribe(observer: () => void) {
        this.onChange = observer;
    },
    getState() {
        return this._state
    }
}



