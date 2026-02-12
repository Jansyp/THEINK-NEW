import React, { useEffect, useState } from "react";

const Scene3D = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame = null;
    const target = { x: 0, y: 0 };

    const handleMove = (event) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;

      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          setOffset({ x: target.x, y: target.y });
          frame = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="scene-3d-bg" aria-hidden="true">
      <div className="scene-3d-grid" />
      <div
        className="scene-orb scene-orb-a"
        style={{ transform: `translate3d(${offset.x * 30}px, ${offset.y * 30}px, 0)` }}
      />
      <div
        className="scene-orb scene-orb-b"
        style={{ transform: `translate3d(${offset.x * -24}px, ${offset.y * -20}px, 0)` }}
      />
      <div
        className="scene-orb scene-orb-c"
        style={{ transform: `translate3d(${offset.x * 18}px, ${offset.y * -16}px, 0)` }}
      />
      <div className="scene-prism scene-prism-a" />
      <div className="scene-prism scene-prism-b" />
    </div>
  );
};

export default Scene3D;
