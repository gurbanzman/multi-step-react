import { configureStore } from "@reduxjs/toolkit";

const initialState={
   name: "",
   mail: "",
   phone: "",
}

const CHANGE_NAME= "user/name";
const CHANGE_MAIL= "user/mail";
const CHANGE_PHONE= "user/phone";

export default function reducer(state=initialState,action){
   switch(action.type){
      case CHANGE_NAME:
         return {...state, name: action.payload};
      case CHANGE_MAIL:
         return {...state,mail: action.payload};
      case CHANGE_PHONE: 
         return {...state,phone: action.payload};
      default:
          return state
   }
}

export const store = configureStore({reducer});

export function handleChangeName(name){
   return {type: CHANGE_NAME, payload: name}
}
export function handleChangeMail(mail){
   return {type: CHANGE_MAIL, payload: mail}
}
export function handleChangePhone(phone){
   return {type: CHANGE_PHONE, payload: phone}
}