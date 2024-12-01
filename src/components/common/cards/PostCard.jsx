import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post.featured_src);

  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <div className="card flex flex-col justify-evenly items-center place-content-center  bg-gray-300 w-80 h-[400px] p-6 text-justify rounded-lg shadow-md transition duration-300 ease-in-out  hover:shadow-xl line-clamp-6">
          <img
            src={post?.featured_src || "https://placehold.co/400"}
            alt={post?.title || "Default Title"}
            className="w-full h-48 object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-900 text-center">
              {post.title.rendered}
            </h1>
            <p
              className="text-md text-gray-700 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            ></p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
