import Header from "./Components/Header/Header";
import Sign,{onSignIn} from "./Components/Sign/Sign";
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Components/Chat/Chat";



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header auth={auth} user={user}  />
      <section>
     {user?<Chat user= {user} user_data={onSignIn}/> :<Sign auth={auth} />} 
      </section>
      
    </div>
  );
}

export default App;
