type LocationType = {
    city: string
    country: string
}
type UsersType = {
    id: number
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
    users: [
        {
            id: 1,
            fillName: "Denis",
            followed: true,
            status: "I am a boss",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 2,
            fillName: "Marina",
            followed: false,
            status: "I am a boss too",
            location: {city: "Vitebsk", country: "Belarus"}
        },
        {
            id: 3,
            fillName: "Kristina",
            followed: true,
            status: "I am a boss too",
            location: {city: "Minsk", country: "Belarus"}
        }
    ]
}
const usersReduser = (state = initialState, action: any) => {
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
    }
}
export const followAC = (userId: any) => ({type: FOLLOW, userId});
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: any) => ({type: SET_USERS, users});