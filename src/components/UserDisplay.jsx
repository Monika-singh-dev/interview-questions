import React, { useEffect, useState } from "react";
import firebase from "../firebaseConfig";
const UserDisplay = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <p>UID: {user.uid}</p>
    </div>
  );
};

export default UserDisplay;
