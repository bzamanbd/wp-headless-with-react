import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/slice/auth-slice";

const Navbar = ({ authUser }) => {
  const dispatch = useDispatch();
  console.log("authUser=>", authUser);
  return (
    <div className="p-4 bg-slate-300">
      <ul className="flex justify-end items-center gap-4 mr-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        {!authUser.token ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/add-post">Add Post</Link>
            </li>

            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
            <li>
              <Link to="/profile">Hi {authUser.user_display_name}</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
