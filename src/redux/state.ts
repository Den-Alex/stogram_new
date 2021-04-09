import {rerenderEntireTree} from "../render";

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

export let state: StateType = {
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
}
export let AddPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}