import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import Browse from "./components/Browse";
import Description from "./components/Description";
import UserContext from "../utilities/UserContext";
import useLoggedInUser from "../utilities/useLoggedInUser";

const AppLayout = () => {
  const user = useLoggedInUser();
  return (
    <UserContext.Provider
      value={{ loggedInUser: user?.email ?? "Automated User" }}>
      <div>
        <Header />
        <Promotion />
        <Browse />
        <Description />
      </div>
    </UserContext.Provider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
