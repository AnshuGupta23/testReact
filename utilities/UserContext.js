import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Automated User",
});

export default UserContext;
