import {ActionTypes, AddPostActiveType, ChangeNewTextActionType, PostType, StateType, StoreType} from "./store";


export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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
let initialState = {
    posts: [
        {id: 1, message: 'YOU', likesCount: 10},
        {id: 2, message: 'YYYYY', likesCount: 12},
    ],
    newPostText: "Deniska"
};

export const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}