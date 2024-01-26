import { MutableRefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T>,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      if (ref.current.classList.contains("confirm")) {
        ref.current.classList.remove("confirm");
        setTimeout(() => {
          ref.current.classList.add("confirm");
        }, 10);
      } else {
        ref.current.classList.add("confirm");
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
};

export { useClickOutside };
