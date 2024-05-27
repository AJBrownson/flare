// // components/SlideDownDialog.tsx
// import { useRef } from "react";

// interface SlideDownDialogProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const SlideDownDialog = ({ isOpen: any , onClose: any }) => {
//   const dialogRef = useRef<HTMLDialogElement>(null);

//   const openDialog = () => {
//     if (dialogRef.current) {
//       dialogRef.current.showModal();
//       dialogRef.current.classList.add("slide-down");
//     }
//   };

//   const closeDialog = () => {
//     if (dialogRef.current) {
//       dialogRef.current.classList.remove("slide-down");
//       dialogRef.current.close();
//     }
//     onClose();
//   };

//   if (isOpen) {
//     openDialog();
//   }

//   return (
//     <dialog ref={dialogRef} className="p-4 rounded bg-white shadow-md transition-all transform translate-y-[-100%] opacity-0">
//       <p>This is a sliding dialog!</p>
//       <button onClick={closeDialog} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
//         Close
//       </button>
//     </dialog>
//   );
// };

// export default SlideDownDialog;
