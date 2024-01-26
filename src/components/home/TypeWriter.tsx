import { homePage } from "@db";
import { useEffect, useRef } from "react";
import Zoom from "react-reveal/Zoom";

const TypeWriter = () => {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    let x = 1;
    setInterval(() => {
      if (ref.current) {
        ref.current.textContent = homePage.texts[x];
      }
      if (x < 16) {
        x++;
      } else {
        x = 0;
      }
    }, 4000);
  }, []);
  return (
    <div className="type-writer absolute xl:left-[100px] xl:top-[30%] z-50">
      <Zoom>
        <div className="text-[40px] font-bold uppercase">{homePage.name}</div>
      </Zoom>
      <span ref={ref} className="text sec-text text-[#57565f] xl:!text-xl">
        {" "}
        I am a Software Engineer
      </span>
    </div>
  );
};

export default TypeWriter;
