import { useState } from "react";
import "./CreatePost.css";

function CreatePost() {
  const [postType, setPostType] = useState("Question");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (title.trim() === "") {
      setError("Please enter a title.");
      return;
    }

    if (postType === "Article" && abstract.trim() === "") {
      setError("Please enter an abstract.");
      return;
    }

    if (description.trim() === "") {
      setError("Please complete the description.");
      return;
    }

    const tagList = tags.split(",").filter((tag) => tag.trim() !== "");

    if (tagList.length > 3) {
      setError("Please enter no more than 3 tags.");
      return;
    }

    alert("Your post has been submitted successfully!");
  }

  let titlePlaceholder = "Start your question with how, what, why, etc.";
  let descriptionLabel = "Describe your problem";
  let descriptionPlaceholder = "Explain your question here";

  if (postType === "Article") {
    titlePlaceholder = "Enter a descriptive title";
    descriptionLabel = "Article Text";
    descriptionPlaceholder = "Enter your article text here";
  }

  return (
    <div className="create-post">
      <h3 className="heading">New Post</h3>

      <form onSubmit={handleSubmit} noValidate>
        <label>Select Post Type:</label>

        <div className="post-type">
          <label>
            <input
              type="radio"
              name="postType"
              value="Question"
              checked={postType === "Question"}
              onChange={() => {
                setPostType("Question");
                setError("");
              }}
            />
            Question
          </label>

          <label>
            <input
              type="radio"
              name="postType"
              value="Article"
              checked={postType === "Article"}
              onChange={() => {
                setPostType("Article");
                setError("");
              }}
            />
            Article
          </label>
        </div>

        <h3 className="heading">What do you want to ask or share</h3>

        <label>Title</label>
        <input
          type="text"
          placeholder={titlePlaceholder}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
        />

        {postType === "Article" && (
          <>
            <label>Abstract</label>
            <textarea
              className="abstract"
              placeholder="Enter a 1-paragraph abstract"
              value={abstract}
              onChange={(event) => {
                setAbstract(event.target.value);
                setError("");
              }}
            />
          </>
        )}

        <label>{descriptionLabel}</label>
        <textarea
          className="description"
          placeholder={descriptionPlaceholder}
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            setError("");
          }}
        />

        <label>Tags</label>
        <input
          type="text"
          placeholder="Add up to 3 tags, e.g., Java"
          value={tags}
          onChange={(event) => {
            setTags(event.target.value);
            setError("");
          }}
        />

        {error && <p className="error-message">{error}</p>}

        <div className="button-container">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;