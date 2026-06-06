import { useState, useEffect } from "react";

const roles = [
  "Frontend Engineer",
  "React Specialist",
  "UI/UX Enthusiast",
  "TypeScript Expert",
  "Full-Stack Developer",
];

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (!isDeleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => { if (timer) clearTimeout(timer); };
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="typewriter-role">
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
};

export default TypeWriter;
