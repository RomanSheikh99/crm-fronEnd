import React, { useEffect, useState } from "react";
import axios from "axios";
import siteInfo from "../../../siteInfo";

function AddBlog() {
  const [image, setImage] = useState(null);
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", e.target.title.value);
    formData.append("blog", e.target.blog.value);
  
    try {
      const res = await axios.post("http://localhost:4000/api/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setBlog(res.data);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "600px",
            margin: "60px",
            border: "5px solid #666",
            padding: "20px",
            fontSize: "32px",
          }}
        >
          <h2>Upload an Image</h2>
          <form onSubmit={handleSubmit}>
            <input
              style={{ margin: "20px 0" }}
              type="file"
              onChange={handleImageChange}
            />
            <input
              type="text"
              placeholder="Title"
              style={{
                margin: "20px 0",
                display: "block",
                width: "100%",
                border: "2px solid #333",
                padding: "10px 20px",
              }}
              name="title"
            />
            <textarea
              type="text"
              style={{
                margin: "20px 0",
                display: "block",
                width: "100%",
                border: "2px solid #333",
                padding: "10px 20px",
              }}
              placeholder="Blog"
              name="blog"
            />
            <button
              style={{
                margin: "20px 0",
                display: "block",
                width: "100%",
                background: "#333",
                color: "#ddd",
                padding: "10px 20px",
              }}
              type="submit"
            >
              Upload
            </button>
          </form>
        </div>
        {/* ======================================== */}
        <div
          style={{
            width: "1000px",
            margin: "60px",
            border: "5px dotted #666",
            padding: "20px",
            fontSize: "32px",
          }}
        >
          <h1>{blog.title}</h1>
          <img src={blog.image} alt="new image" />
          <p>{blog.blog}</p>
        </div>
        {/* ================================================= */}
      </div>
      <section style={{display: "flex", flexWrap: 'wrap'}}>
      {blogs.map(blog=>{
      return <div
      key={blog.id}
        style={{
          width: "400px",
          margin: "30px",
          border: "2px solid #666",
          padding: "16px",
          borderRadius: "5px",
          fontSize: "22px",
        }}
      >
        <h1>{blog.title}</h1>
        <img style={{ margin: "10px 0"}} src={blog.image} alt="new image" />
        <p>{blog.blog}</p>
      </div>
      })}
      </section>
    </main>
  );
}

export default AddBlog;
