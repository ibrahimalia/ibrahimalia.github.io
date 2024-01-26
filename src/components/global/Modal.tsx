import { FC, MutableRefObject, useEffect, useRef } from "react";
import classNames from "classnames";
import { IModal } from "interfaces";
import ReactDOM from "react-dom";
import { useClickOutside, useLockPage } from "@hooks";
import { FaX } from "react-icons/fa6";

const Modal: FC<IModal> = () => {
  return <div></div>;

  // const ref = useRef() as MutableRefObject<HTMLDivElement>;
  // // const { lockScroll, unlockScroll } = useLockPage();
  // useClickOutside(ref);

  // // useEffect(() => {
  // //   if (open) {
  // //     lockScroll();
  // //   } else {
  // //     unlockScroll();
  // //   }  // // }, [open]);

  // return ReactDOM.createPortal(
  //   <>
  //     <div
  //       className={classNames(
  //         `fixed top-0 left-0 w-full h-full z-[1001] transform transition-all duration-300 overflow-y-auto scroll-container`,
  //         {
  //           "inset-0 open-modal": open,
  //           "inset-0 close-modal": !open,
  //         }
  //       )}
  //     >
  //       <div className="flex items-center min-h-screen px-4 py-8">
  //         <div
  //           className={classNames(
  //             `relative w-full max-w-4xl p-5 z-20 mx-auto transition_300 bg-white rounded-2xl shadow-lg ${className}`,
  //             {
  //               "opacity-100 scale-100": open,
  //               "opacity-0 scale-0": !open,
  //             }
  //           )}
  //           ref={ref}
  //         >
  //           <div
  //             className="absolute top-4 right-4 hover:text-red-500 cursor-pointer h-[60px]"
  //             onClick={() => setOpen(false)}
  //           >
  //             <FaX />
  //           </div>
  //           {children}
  //         </div>
  //       </div>
  //     </div>
  //     {open && (
  //       <div
  //         className="fixed inset-0 h-screen w-screen bg-black z-10 opacity-40"
  //         onClick={() => setOpen(false)}
  //       ></div>
  //     )}
  //   </>,
  //   document.getElementById("modal") as Element | DocumentFragment
  // );
};

export default Modal;
