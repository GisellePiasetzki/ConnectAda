
// import { dataBase } from "../dataBase/data.js";

export function btnAddRemoveFriends(userEmail,dataBase){

    // return console.log(userEmail)
    const UserLocalStorage = window.localStorage.getItem('user').replaceAll('"','')
    const index = dataBase.findIndex(item => item.email == UserLocalStorage)
    const user = dataBase[index];

    const indexFriend = dataBase.findIndex(item => item.email == userEmail)
    const userFriend = dataBase[indexFriend];

    user.newFriendship(userFriend);

}