import React from 'react';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Hooks
import { useAuthState } from './hooks';
// Components
import Channel from './components/Channel';
import Loader from './components/Loader';
import SignUp from './components/SignUp';

firebase.initializeApp({
  apiKey: "AIzaSyDBdq3at9FMIUvTN9Y1U_yNUp9YDT8kwRI",
  authDomain: "test-website1-86f06.firebaseapp.com",
  projectId: "test-website1-86f06",
  storageBucket: "test-website1-86f06.appspot.com",
  messagingSenderId: "1061230854629",
  appId: "1:1061230854629:web:0d39c87a384c9854332f0c",
  measurementId: "G-5LC8HM2ZNL"
});



function App() {
  const { user, initializing } = useAuthState(firebase.auth());
  

  //const ThemeIcon = darkMode ? SunIcon : MoonIcon;

  const signInAnon = async () => {
    // Retrieve Google provider object
    //const provider = new firebase.auth.;
    // Set language to the default browser preference
    //firebase.auth().useDeviceLanguage();
    // Start sign in process
    firebase.auth().signInAnonymously(); 
    // try {
    //   await firebase.auth().signInWithPopup(provider);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };


  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader size="lg" />
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
      <div className="flex items-center justify-center shadow-md h-full">
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-white dark:bg-coolDark-600 transition-all">
          <h2 className="mb-2 text-3xl flex items-center">
            Dialogue Data Collection Site
          </h2>
          <p className="mb-8 text-lg text-center">
            For you to collect conversational data for corpus development.
          </p>
          <button
            onClick={signInAnon}
            className="uppercase text-sm font-medium text-primary-500 tracking-wide hover:bg-primary-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all"
          >
            {/* <svg
              viewBox="5 -5 30 30"
              enableBackground="new 5 -5 30 30"
              className="w-6 h-6 mr-4 flex-shrink-0"
            >
              <path
                fill="#fff"
                d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"
              ></path>
              <path
                fill="#EA4335"
                d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"
              ></path>
              <path
                fill="#FBBC05"
                d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"
              ></path>
              <path
                fill="#4285F4"
                d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"
              ></path>
              <path
                fill="#34A853"
                d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"
              ></path>
            </svg> */}
            Register
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-white transition-colors">
      <header
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
        style={{ height: 'var(--topbar-height)' }}
      >
        <div className="flex items-center">
          {user ? (
            <button
              onClick={signOut}
              className="uppercase text-sm font-medium text-primary-500 tracking-wide hover:bg-primary-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all"
            >
              Sign out
            </button>
          ) : null}
        </div>
      </header>
      <main
        className="flex-1"
        style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
