import React, { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [selectedModel, setSelectedModel] = useState("DenseNet");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h2>ICH DETECTION</h2>
        <ul className="menu">
          <li
            className={selectedModel === "DenseNet" ? "active" : ""}
            onClick={() => handleModelChange("DenseNet")}
          >
            DenseNet
          </li>
          <li
            className={selectedModel === "EfficientNet" ? "active" : ""}
            onClick={() => handleModelChange("EfficientNet")}
          >
            EfficientNet
          </li>
          <li
            className={selectedModel === "ResNet" ? "active" : ""}
            onClick={() => handleModelChange("ResNet")}
          >
            ResNet
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <div className="upload-section">
          <h3>Selected Model: {selectedModel}</h3>
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload Lung X-Ray
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        {image && (
          <div className="image-preview">
            <img src={image} alt="Uploaded Scan" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

