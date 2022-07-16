import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import ArticlesDataService from "../../../services/ArticlesDataService";
import AuthService from "../../../services/AuthService";
import UploadFilesService from "../../../services/UploadFilesService";
import "./AdminNews.css";

function AddNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const user = AuthService.getCurrentUser();

  const onFileChange = (e) => {
    // Update the state
    setSelectedFile(e.target.files[0]);
  };

  async function addArticle() {
    console.log(title);
    console.log(description);
    console.log(content);
    console.log(user.id);
    console.log(selectedFile.name);

    UploadFilesService.upload(selectedFile).then((res) => {
      console.log(res.data);
    });

    const article = {
      title,
      description,
      content,
      image: `http://localhost:8080/api/v1/files/${selectedFile.name}`,
    };

    ArticlesDataService.addArticle(user.id, article).then((res) => {
      console.log(res.data);
      console.log("successful!");
    });
  }

  return (
    <div className="add-news__wrapper">
      <h1>Add new Articles</h1>

      <div className="add-news__input">
        <label htmlFor="add-news__input-title">Title</label>
        <input
          type="text"
          id="add-news__input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="add-news__input">
        <label htmlFor="add-news__input-description">Description</label>
        <input
          type="text"
          id="add-news__input-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="add-news__input">
        <label htmlFor="add-news__input-image">Image</label>
        <input type="file" id="add-news__input-image" onChange={onFileChange} />
      </div>

      <div className="add-news__input">
        <MDEditor value={content} onChange={setContent} />
      </div>

      <button className="btn red-btn" onClick={addArticle}>
        Add
      </button>
    </div>
  );
}

export default AddNews;
