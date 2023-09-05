import React, { useEffect, useState } from "react";
import axios from "axios";

// import multer from 'multer';
// import path from 'path';
// const  = require('');

function AddBlog() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("sds");
  const [blog, setBlog] = useState({});
  const [description, setDescription] = useState("des");


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/blogImages')
    },
    filename: (req, file, cb) => {
        const filename = path.extname(file.originalname);
        cb(null, filename);
      },
})

const upload = multer({
    storage: storage
});

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    upload.single('image')
  };

  useEffect(()=>{
    axios
    .get(`http://localhost:4000/api/blogs/142122ee-b166-413e-af56-200d23929381`)
    .then((res) => {
        setBlog(res.data)
    })
    .catch((error) => {
     console.log(error)
    });
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success, redirect or update UI as needed
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <main style={{display: "flex"}}>
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
    <div  style={{
        width: "1000px",
        margin: "60px",
        border: "5px dotted #666",
        padding: "20px",
        fontSize: "32px",
      }}>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt="new image" />
        <p>{blog.blog}</p>
        <p>{blog.image}</p>
      </div>
    </main>
  );
}

export default AddBlog;
