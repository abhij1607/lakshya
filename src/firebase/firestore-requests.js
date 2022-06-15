import { writeBatch, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export const createUser = async (userId) => {
  try {
    const batch = writeBatch(db);
    const usersRef = doc(db, "users", userId);

    const userData = {
      todoList: [],
    };

    batch.set(usersRef, userData);

    await batch.commit();
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserDetails = async (userId) => {
  try {
    const querySnapshot = await getDoc(doc(db, "users", userId));
    return querySnapshot.data()?.todoList;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserDetails = async (userId, todoList, dispatch) => {
  try {
    const usersRef = doc(db, "users", userId);
    await updateDoc(usersRef, todoList);
    dispatch({ type: "UPDATE_TODO_LIST", payload: todoList.todoList });
  } catch (error) {
    console.log(error);
  }
};
