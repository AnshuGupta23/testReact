import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  validatePassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkPassword();
  }, [password]);

  const checkPassword = async () => {
    const status = await validatePassword(auth, password);
    console.log(status);
  };

  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential;
    } catch (error) {
      console.error(error.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential;
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex space-x-2">
        <button
          onClick={signup}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>

        <button
          onClick={login}
          className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </button>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <div>{user ? "Logged In" : "Not Logged In"}</div>
    </div>
  );
};

export default Profile;
