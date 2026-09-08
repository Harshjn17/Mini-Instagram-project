import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Createpost() {
    const navigate = useNavigate()

  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", text.trim());

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:3000/create-post",
        formData
      );

      navigate("/feed")
        //console.log("Post created:", data);

      // Reset form
      setImage(null);
      setText("");
      e.target.reset();

    } catch (error) {
      console.error(
        "Upload error:",
        error.response?.data?.message || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-container">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Choose Image</label>

        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
        />

        <label htmlFor="caption">Caption</label>

        <textarea
          id="caption"
          name="caption"
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Createpost;