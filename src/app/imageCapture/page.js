"use client";
import React, { useRef } from "react";

export default function CameraComponent() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleCapturePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const imageDataURL = canvasRef.current.toDataURL("image/jpeg");
      console.log(imageDataURL); // Data URL of the captured image
    }
  };

  return (
    <div>
      <button onClick={handleStartCamera} id="start-camera">
        Start Camera
      </button>
      <video
        ref={videoRef}
        id="video"
        width="320"
        height="240"
        autoPlay
      ></video>
      <button onClick={handleCapturePhoto} id="click-photo">
        Click Photo
      </button>
      <canvas ref={canvasRef} id="canvas" width="320" height="240"></canvas>
    </div>
  );
}
