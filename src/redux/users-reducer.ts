type LocationType = {
    city: string
    country: string
}
type UsersType = {
    id: number
    photoUrl: string
    fillName: string
    status: string
    location: LocationType
    followed: boolean
}
type initialStateType = {
    users: Array<UsersType>
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export let initialState: initialStateType = {
    users: []
}
export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}
export const followAC = (userId: any) => ({type: FOLLOW, userId});
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: any) => ({type: SET_USERS, users});