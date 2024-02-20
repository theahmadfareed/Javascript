import { useState } from "react";
import { submitBlog } from "../../APIs/internal";
import { useSelector } from "react-redux";
import styles from "./SubmitBlog.module.css";
import TextInput from "../../Components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmitBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState("");

  const author = useSelector((state) => state.user._id);

  const getPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // Access the file name
    const fileName = file.name;
    setPhotoName(fileName)
    // console.log(fileName)
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
  };
  const submitHandler = async () => {
    const data = {
      author,
      title,
      content,
      photo,
    };
    // console.log(title)
    // console.log(content)
    // console.log(photoName)

    try {
      const response = await submitBlog(data);

      if (response.status === 201) {
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Create a blog!</div>
      <TextInput
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "60%" }}
      />
      <textarea
        className={styles.content}
        placeholder="your content goes here..."
        maxLength={400}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={styles.photoPrompt}>
        <p>Choose a photo</p>
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/jpg, image/jpeg, image/png"
          onChange={getPhoto}
        />
        {photo !== "" ? (
          <img alt="NoPhoto" src={photo} width={50} height={50} />
        ) : (
          ""
        )}
      </div>
      <button
        className={styles.submit}
        onClick={submitHandler}
        disabled={title === "" || content === "" || photo === ""}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitBlog;
