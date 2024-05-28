import { useEffect, useState } from "react";
import axios from "axios";

function UploadImages() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    try {
      const result = await axios.post("http://localhost:5000/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(result.data);
      getImage();  // Refresh the list of images after upload
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-image");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
      {allImage.map((data) => (
        <img
          key={data._id}
          src={`./components/HomePage/assets/${data.image}`}
          alt={data.image}
          height={100}
          width={100}
        />
      ))}
    </div>
  );
}

export default UploadImages;