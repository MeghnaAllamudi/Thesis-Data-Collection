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
    firebase.auth().signInAnonymously(); 
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
        <div className="flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-white">
          <h2 className="mb-2 text-3xl flex items-center">
            Dialogue Data Collection Site
          </h2>
          <p className="mb-8 text-lg text-center">
            For collecting conversational data for corpus development.
          </p>
          <button
            onClick={signInAnon}
            className="uppercase text-sm font-medium text-primary-500 tracking-wide hover:bg-primary-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all"
          >
            Register
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white">
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
