import React, { useRef, useEffect } from "react";

const StarfieldCanvas = ({ speed = 0.2, starCount = 120 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const init = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random(),
          r: Math.random() * 1.2 + 0.2,
          a: 0.7 + Math.random() * 0.3,
        });
      }
    };

    init();

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (let s of starsRef.current) {
        s.y -= speed * s.z;
        if (s.y < 0) {
          s.y = h;
          s.x = Math.random() * w;
        }
        ctx.globalAlpha = s.a;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarfieldCanvas;
