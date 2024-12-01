import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../common/cards/PostCard";
import Pagination from "../../common/pagination/Pagination";
import LoaderSpinner from "../../common/loader/LoaderSpinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalpages, setTotalpages] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_ROOT}/posts?per_page=6&&page=${currentpage}`;
    axios.get(url).then((res) => {
      console.log("TotalPages=>", res.headers["x-wp-totalpages"]);
      setTotalpages(Number(res.headers["x-wp-totalpages"]));
      setPosts(res.data);
    });
  }, [currentpage]);
  return (
    <>
      <div className="w-4/5 m-auto flex justify-between align-middle gap-8 p-6 flex-wrap">
        {Object.keys(posts).length ? (
          posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })
        ) : (
          <div className="absolute top-1/2 left-1/2">
            <LoaderSpinner />
          </div>
        )}
      </div>
      {/* Pagination */}
      {Object.keys(posts).length > 0 && (
        <Pagination
          currentpage={currentpage}
          setCurrentpage={setCurrentpage}
          totalpages={totalpages}
        />
      )}
    </>
  );
};

export default Posts;
