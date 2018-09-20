import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child("users");

export const addUpdateUser = (newUser,id) => async dispatch => {
	console.log(newUser);
	if(id){
		usersRef.child(id).set(newUser);
		dispatch({
			type: 'ADD_UPDATE_USER',
			payload: {
				key:id,
				data:newUser
			}
		});
	}else{
		id = firebase.database().ref().child('users').push().key;
		usersRef.child(id).set(newUser);
		dispatch({
			type: 'ADD_UPDATE_USER',
			payload: {
				key:id,
				data:newUser
			}
		});
	}
};

export const getUser = (id) => async dispatch => {
	usersRef.child(id).once('value').then((snapshot) => {
		dispatch({
			type: 'GET_USER',
			payload: {
				key:snapshot.key,
				data:snapshot.val()
			}
		});
	});
};