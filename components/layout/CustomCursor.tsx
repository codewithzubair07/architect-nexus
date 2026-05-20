"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const render = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };

    const handleEnter = () => cursor.classList.remove("cursor--hidden");
    const handleLeave = () => cursor.classList.add("cursor--hidden");

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    rafId = requestAnimationFrame(render);

    const linkElements = document.querySelectorAll("a, button, [data-cursor='link']");
    const cardElements = document.querySelectorAll("[data-cursor='card']");

    const addLink = () => cursor.classList.add("cursor--link");
    const removeLink = () => cursor.classList.remove("cursor--link");
    const addCard = () => cursor.classList.add("cursor--card");
    const removeCard = () => cursor.classList.remove("cursor--card");

    linkElements.forEach((element) => {
      element.addEventListener("mouseenter", addLink);
      element.addEventListener("mouseleave", removeLink);
    });

    cardElements.forEach((element) => {
      element.addEventListener("mouseenter", addCard);
      element.addEventListener("mouseleave", removeCard);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
      linkElements.forEach((element) => {
        element.removeEventListener("mouseenter", addLink);
        element.removeEventListener("mouseleave", removeLink);
      });
      cardElements.forEach((element) => {
        element.removeEventListener("mouseenter", addCard);
        element.removeEventListener("mouseleave", removeCard);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor cursor--hidden" />;
}
