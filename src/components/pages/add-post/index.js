import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const AddPost = ({ authUser }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      featured_media: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      content: Yup.string(),
      featured_media: Yup.mixed().nullable(),
    }),

    onSubmit: async (data) => {
      console.log(data);
      try {
        const { token } = authUser;
        if (data.featured_media) {
          const mediaUrl = `${process.env.REACT_APP_API_ROOT}/media`;
          const formData = new FormData();
          formData.append("file", data.featured_media);
          const mediaHeaders = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          };
          const mediaResponse = await axios.post(mediaUrl, formData, {
            headers: mediaHeaders,
          });
          data.featured_media = mediaResponse.data.id;
        }
        console.log("FeaturedMedia==>", data.featured_media);
        const url = `${process.env.REACT_APP_API_ROOT}/posts`;
        const payload = { ...data, status: "publish" };
        const headers = { Authorization: `Bearer ${token}` };
        const post = await axios.post(url, payload, { headers: headers });
        console.log("Post==>", post);
        return post;
      } catch (error) {
        console.log("Error==>", error);
      }
    },
  });
  return (
    <section className="w-full h-screen p-6 place-content-center grid  gap-4">
      <div className="w-full">
        <h1 className="text-center">Create New Post</h1>
      </div>
      <div className="w-full">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2 w-full">
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              className="focus:outline-none border border-gray-400 rounded-md py-2 px-2 w-[400px] md:w-[600px] text-gray-700 "
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              name="content"
              placeholder="Post Content"
              className="focus:outline-none border border-gray-400 rounded-md py-2 px-2 w-full text-gray-700"
              value={formik.values.content}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="file"
              name="featured_media"
              onChange={(event) => {
                formik.setFieldValue(
                  "featured_media",
                  event.currentTarget.files[0]
                );
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 p-2 bg-gray-500 text-center rounded-md "
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
