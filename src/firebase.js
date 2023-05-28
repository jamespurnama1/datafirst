import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, remove } from 'firebase/database'
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth, signInWithEmailAndPassword, signOut, updateProfile, updateEmail, updatePassword, deleteUser, sendPasswordResetEmail, setPersistence, browserSessionPersistence } from "firebase/auth";
import store from '@/store'
export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: `${import.meta.env.VITE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${import.meta.env.VITE_DATABASE_NAME}.firebasedatabase.app`,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
})

// used for the databas refs
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export function persistence(checked) {
  setPersistence(auth, browserSessionPersistence)
}
// const user = useCurrentUser(firebaseApp);
// const dbRef = ref(getDatabase());
// here we can export reusable database references
export const blogRef = ref(db, 'blog')
export const jobsRef = ref(db, 'jobs')
export const writeJobs = (title, desc, type, img, slug, link, date) => {
  // store.dispatch('incrementProgress');
  set(ref(db, 'jobs/' + slug), {
    title,
    desc,
    type,
    img,
    slug,
    link,
    date
  })
  // .then(() => {
  //   store.dispatch('completeProgress');
  // }).catch(() => {
  //   store.dispatch('errorProgress');
  // })
}

export const deleteJob = (slug) => {
  store.dispatch('incrementProgress');
  remove(ref(db, 'jobs/' + slug)).then(() => {
    store.dispatch('completeProgress');
  }).catch(() => {
    store.dispatch('errorProgress');
  });
}

export const writeBlog = (title, author, status, content, img, slug, date) => {
  // store.dispatch('incrementProgress');
  set(ref(db, 'blog/' + slug), {
    title,
    author,
    status,
    content,
    img,
    slug,
    date
  })
  // .then(() => {
  //   store.dispatch('completeProgress');
  // }).catch(() => {
  //   store.dispatch('errorProgress');
  // })
}

export const deleteBlog = (slug) => {
  store.dispatch('incrementProgress');
  remove(ref(db, 'blog/' + slug)).then(() => {
    store.dispatch('completeProgress');
  }).catch(() => {
    store.dispatch('errorProgress');
  });
}

const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_SITE_KEY),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});


export function signIn(j,k) {
  store.dispatch('incrementProgress');
  signInWithEmailAndPassword(auth, j, k).then((userCredential) => {
    store.dispatch('completeProgress');
  }).catch((error) => {
    store.dispatch('errorProgress');
    throw error
  });
}

export function logOut() {
  store.dispatch('incrementProgress');
  signOut(auth).then(() => {
    store.dispatch('completeProgress');
  }).catch((error) => {
    store.dispatch('errorProgress');
  });
  }

export const getUser = () => user;

export function updateUser(x) {
  if (auth.currentUser.uid === 'ES68S2SIKWbS97tjBXTQ3J1kVbe2') throw 403
  updateProfile(auth.currentUser, {
    "displayName": x
  }).then(() => {
    window.location.reload();
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

export function updateMail(x) {
  if (auth.currentUser.uid === 'ES68S2SIKWbS97tjBXTQ3J1kVbe2' || 'm0hxAG1yX9Qm0Zk8AV1NBKJH4vh2') throw 403
  updateEmail(auth.currentUser, "user@example.com").then(() => {
    // Email updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
  }

export function updatePass (x) {
  store.dispatch('incrementProgress');
  updatePassword(auth.currentUser, x).then(() => {
    store.dispatch('completeProgress');
  }).catch((error) => {
    store.dispatch('errorProgress');
  });
}

export function resetPass(x) {
  store.dispatch('incrementProgress');
  sendPasswordResetEmail(auth, x)
  .then(() => {
    store.dispatch('completeProgress');
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    store.dispatch('errorProgress');
  });
}

export function delUser() {
  deleteUser(auth.currentUser).then(() => {
    // router.push('/signup')
  }).catch((error) => {
    // An error ocurred
    // ...
  });
}

