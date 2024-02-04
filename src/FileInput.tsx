import React, { useRef } from "react";
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";

const FileInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async () => {
    const fileInput = fileInputRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      // Read the PDF using pdfjs
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfData = new Uint8Array(arrayBuffer);

      // Create a Blob from Uint8Array
      const blob = new Blob([pdfData], { type: "application/pdf" });

      // Load the PDF
      const pdfLoader = new WebPDFLoader(blob);
      const docs = await pdfLoader.load();

      // Now you can use pdfDocument
      console.log("PDF Loaded:", docs);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
      <button onClick={() => fileInputRef.current?.click()}>Select File</button>
    </div>
  );
};

export default FileInput;
