"use client";

import { useDropzone } from "react-dropzone";
import { Card, CardBody } from "@heroui/react";
import { useCallback, useState } from "react";

export default function DragNDropUpload() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_FORMATS = ["bin", "mpc", "flash", "slave", "txt", "dat", "mmf"];

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      setError("");

      // Handle file validation
      const validFiles = acceptedFiles.filter((file) => {
        const ext = file.name.split(".").pop().toLowerCase();
        if (!ALLOWED_FORMATS.includes(ext)) {
          setError(
            "Invalid file format! Allowed: .bin, .mpc, .flash, .slave, .txt, .dat, .mmf"
          );
          return false;
        }
        if (file.size > MAX_FILE_SIZE) {
          setError("File size exceeds 10MB limit!");
          return false;
        }
        return true;
      });

      setFiles([...files, ...validFiles]);
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ALLOWED_FORMATS.map((ext) => `.${ext}`).join(","), // Set accepted formats
    maxSize: MAX_FILE_SIZE,
  });

  return (
    <Card className="w-full h-[120px] border border-dashed border-slate-700 bg-slate-900">
      <CardBody
        {...getRootProps()}
        className="flex flex-col items-center justify-center text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-slate-400 text-sm">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop files here, or click to browse"}
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Max file size: 10MB
          <br />
          Formats: .bin, .mpc, .flash, .slave, .txt, .dat, .mmf
        </p>
      </CardBody>

      {error && (
        <p className="text-red-500 text-xs text-center- mt-2">{error}</p>
      )}

      <div className="mt-2">
        {files.length > 0 && (
          <ul className="text-xs text-slate-300">
            {files.map((file, index) => (
              <li key={index}>
                📂 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
