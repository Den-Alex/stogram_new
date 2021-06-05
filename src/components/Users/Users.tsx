import React from "react";
import styles from "./users.module.css";

export function Users(props: any) {
    if ( props.users.length ===0 ) {
    props.setUsers([
        {
            id: 1,
            photoUrl: "",
            fillName: "Denis",
            followed: true,
            status: "I am a boss",
            location: {city: "Mogilev", country: "Belarus"}
        },
        {
            id: 2,
            photoUrl: "",
            fillName: "Marina",
            followed: false,
            status: "I am a boss too",
            location: {city: "Vitebsk", country: "Belarus"}
        },
        {
            id: 3,
            photoUrl: "",
            fillName: "Kristina",
            followed: true,
            status: "I am a boss too",
            location: {city: "Minsk", country: "Belarus"}
        }
    ])}
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={ () => { props.unfollow(u.id)}}>Unfollow</button>
                                        : <button onClick={ () => { props.follow(u.id)}}>Follow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                 <div>{u.fullName}</div>
                                 <div>{u.status}</div>
                            </span>
                            <span>
                                  <div>{u.location.country}</div>
                                  <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
}