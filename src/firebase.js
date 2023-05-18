import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyB46MtbMJ5XOekpQwDaOWB8vCcElacg-cA",
  authDomain: "datafirst-538f9.firebaseapp.com",
  databaseURL: "https://datafirst-538f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "datafirst-538f9",
  storageBucket: "datafirst-538f9.appspot.com",
  messagingSenderId: "895226027021",
  appId: "1:895226027021:web:e5a909dd7983df6819c944",
  measurementId: "G-XWQGSM7BMT"
})

// used for the databas refs
const db = getDatabase(firebaseApp)
// const dbRef = ref(getDatabase());

// here we can export reusable database references
export const blogRef = ref(db, 'blog')
export const jobsRef = ref(db, 'jobs')
export const writeJobs = function writeUserData(title, desc, type, img, slug, date) {
  const db = getDatabase();
  set(ref(db, 'jobs/' + slug), {
    title,
    desc,
    type,
    img,
    slug,
    date
  });
}
export const writeBlog = function writeUserData(title, author, desc, content, img, slug, date) {
  const db = getDatabase();
  set(ref(db, 'blog/' + slug), {
    title,
    author,
    desc,
    content,
    img,
    slug,
    date
  });
}