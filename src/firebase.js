import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

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

const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_SITE_KEY),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});
