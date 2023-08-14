// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdJbM-s_q-0ExkbxDvIjD7xtFYEmxqxpc",
  authDomain: "pi-countries-25f96.firebaseapp.com",
  projectId: "pi-countries-25f96",
  storageBucket: "pi-countries-25f96.appspot.com",
  messagingSenderId: "204856464809",
  appId: "1:204856464809:web:2da1eff658edc6e8b760b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file){
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};