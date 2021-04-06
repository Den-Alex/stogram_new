import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


export type DialogItemType = {
    name: string
    id: number
}
export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}