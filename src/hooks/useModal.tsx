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
import { FaX } from "react-icons/fa6";

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
          <div
            className={classNames(
              `fixed top-0 left-0 w-full h-full z-[1001] transform transition-all duration-300 overflow-y-auto scroll-container`,
              {
                "inset-0 open-modal": isOpen,
                "inset-0 close-modal": !isOpen,
              }
            )}
          >
            <div className="flex items-center min-h-screen px-4 py-8">
              <div
                className={classNames(
                  `relative w-full max-w-4xl p-5 z-20 mx-auto transition_300 bg-white rounded-2xl shadow-lg ${className}`,
                  {
                    "opacity-100 scale-100": isOpen,
                    "opacity-0 scale-0": !isOpen,
                  }
                )}
                ref={ref}
              >
                <div
                  className="absolute top-4 right-4 text-red-500 cursor-pointer  z-[1121]"
                  onClick={() => close()}
                >
                  <FaX />
                </div>
                {children}
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 h-screen w-screen bg-black z-10 opacity-40"></div>
          )}
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
