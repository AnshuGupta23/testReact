import { useContext } from "react";
import UserContext from "../../utilities/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="sticky top-0 bg-white z-50 px-12 py-0.5 flex items-center shadow-md text-sm">
      <div className="ml-8 mx-2 p-1 cursor-pointer">
        <ul>Logo</ul>
      </div>
      <div className="ml-10 my-3 p-1 flex space-x-2 text-sm">
        <ul className="mx-1 py-2 px-5 cursor-pointer transition-all duration-150 hover:bg-gray-100 hover:rounded-lg">
          Home Page
        </ul>
        <ul className="mx-1 py-2 px-5 cursor-pointer transition-all duration-150 hover:bg-gray-100 hover:rounded-lg">
          Paid Course
        </ul>
        <ul className="mx-1 py-2 px-5 cursor-pointer transition-all duration-150 hover:bg-gray-100 hover:rounded-lg">
          Free Course
        </ul>
        <ul className="mx-1 py-2 px-5 cursor-pointer transition-all duration-150 hover:bg-gray-100 hover:rounded-lg">
          More v
        </ul>
      </div>
      <div className="mx-1 py-2 px-5 items-center cursor-pointer ml-auto text-sm transition-all duration-150 hover:bg-gray-100 hover:rounded-lg">
        {loggedInUser}
      </div>
    </div>
  );
};

export default Header;
