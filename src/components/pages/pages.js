import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import Posts from "./posts/Posts";
import Navbar from "../common/navbar";
import SinglePost from "./single-post";
import Login from "./login";
import AddPost from "./add-post";
import Logout from "./logout";
import ProtectedRoute from "./protected-route";
import { useSelector } from "react-redux";

const Pages = () => {
  const authUser = useSelector((state) => state.auth.user);
  return (
    <>
      <Navbar authUser={authUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route element={<ProtectedRoute authUser={authUser} />}>
          <Route path="/add-post" element={<AddPost authUser={authUser} />} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
