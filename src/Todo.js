import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import {ACTIONS} from "./App"

export default function Todo({todo , dispatch, test} ){
    return(
    <div>
        <span style={ { color : todo.complete ? '#aaa' : '#000'}}> {todo.name}</span>
        <button onClick={ ()=> dispatch( { type : ACTIONS.TOGGLE_TODO , payload :{ id :todo.id } } ) }>Toogle</button>
        <button onClick={ ()=> dispatch( { type : ACTIONS.Delete_todo , payload :{ id :todo.id } } ) }>Delete</button>
    </div>
    );
};