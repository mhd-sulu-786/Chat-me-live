import Header from "./Components/Header/Header";
import Sign from "./Components/Sign/Sign";
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDTlYOxHarGpBWHhlzzkxcK2FhjvWiYJ8c",
  authDomain: "chat-c3f01.firebaseapp.com",
  projectId: "chat-c3f01",
  storageBucket: "chat-c3f01.appspot.com",
  messagingSenderId: "409785853124",
  appId: "1:409785853124:web:06b4c3b6e4290e7c185591",
  measurementId: "G-F746TRWE0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


function App() {
  return (
    <div className="App">
      <Header/>
      <section>
      <Sign auth={auth} />
      </section>
      
    </div>
  );
}

export default App;
