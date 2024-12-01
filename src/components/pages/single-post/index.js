import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderSpinner from "../../common/loader/LoaderSpinner";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res, res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      {Object.keys(post).length ? (
        <div className="p-5">
          {post.featured_src && (
            <div>
              <img
                src={post.featured_src}
                alt="featured-image"
                className="w-[600px]"
              />
            </div>
          )}
          <div>
            <h1 className="font-bold text-xl">{post.title.rendered}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2">
          <LoaderSpinner />
        </div>
      )}
    </>
  );
};

export default SinglePost;
