import MDEditor from "@uiw/react-md-editor";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ArticlesDataService from "../../../services/ArticlesDataService";
import AuthService from "../../../services/AuthService";
import UploadFilesService from "../../../services/UploadFilesService";
import "./AdminNews.css";

function AddNews() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const user = AuthService.getCurrentUser();

  const onFileChange = (e) => {
    // Update the state
    setSelectedFile(e.target.files[0]);
  };

  async function addArticle() {
    UploadFilesService.upload(selectedFile).then((res) => {
      // console.log(res.data);
    });

    const article = {
      title,
      description,
      content,
      image: `http://localhost:8080/api/v1/files/${selectedFile.name}`,
    };

    ArticlesDataService.addArticle(user.id, article).then(() => {
      navigate("/admin/news");
    });
  }

  return (
    <div className="add-news__wrapper">
      <Link to={"/admin/news"} className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Add new Articles</h1>

      <div className="man-form__input">
        <label htmlFor="add-news__input-title">Title</label>
        <input
          type="text"
          id="add-news__input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="man-form__input">
        <label htmlFor="add-news__input-description">Description</label>
        <input
          type="text"
          id="add-news__input-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="man-form__input">
        <label htmlFor="add-news__input-image">Image</label>
        <input type="file" id="add-news__input-image" onChange={onFileChange} />
      </div>

      <div className="man-form__input">
        <MDEditor value={content} onChange={setContent} />
      </div>

      <button className="man-btn red-btn" onClick={addArticle}>
        Add
      </button>
    </div>
  );
}

export default AddNews;
