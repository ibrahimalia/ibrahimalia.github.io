import classNames from "classnames";
import { IModal, ModalResult } from "interfaces";
import {
  ElementType,
  FC,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { useLockPage } from "./useLockPage";
import { useClickOutside } from "./use-click-outside";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

const useModal = (): [ElementType<IModal>, ModalResult] => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [isOpen, setOpen] = useState(false);
  const { lockScroll, unlockScroll } = useLockPage();
  useClickOutside(ref);

  const open = useCallback(() => {
    setOpen(true);
    lockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    unlockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ModalWrapper: FC<IModal> = useCallback(
    ({ children, className = "" }) => {
      return ReactDOM.createPortal(
        <>
          {/* Backdrop */}
          <div
            className={classNames(
              "fixed inset-0 z-[1000] transition-all duration-300",
              {
                "opacity-100 pointer-events-auto": isOpen,
                "opacity-0 pointer-events-none": !isOpen,
              }
            )}
            style={{ background: "rgba(2,4,14,0.75)", backdropFilter: "blur(8px)" }}
          />

          {/* Modal container */}
          <div
            className={classNames(
              "fixed inset-0 z-[1001] flex items-center justify-center px-4 py-8 overflow-y-auto scroll-container",
              {
                "open-modal": isOpen,
                "close-modal": !isOpen,
              }
            )}
          >
            <div
              className={classNames(
                `relative w-full max-w-3xl z-20 mx-auto rounded-2xl ${className}`,
                "bg-[#080b1a] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)]",
                {
                  "opacity-100 scale-100": isOpen,
                  "opacity-0 scale-95": !isOpen,
                }
              )}
              style={{ transition: "opacity 0.25s ease, transform 0.25s ease" }}
              ref={ref}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-[1121] flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
                onClick={() => close()}
                aria-label="Close"
              >
                <IoClose size={16} />
              </button>

              {children}
            </div>
          </div>
        </>,
        document.getElementById("modal") as Element | DocumentFragment
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );

  return [ModalWrapper, { isOpen, open, close }];
};

export default useModal;
