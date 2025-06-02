import { useImperativeHandle, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

interface ModalProps {
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    dialogRef?.current?.close();
  };

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef?.current?.showModal();
      dialogRef?.current?.scrollTo(0, 0);
    },
    close() {
      dialogRef?.current?.close();
    },
  }));

  return createPortal(
    <dialog
      onClose={handleClose}
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] max-w-300 min-h-56 bg-background2 text-white flex flex-col items-start justify-center gap-5 p-6 -z-10 border-none rounded-xl shadow-[0_0_10px_5px_#00000080] outline-none animate-slide-in-from-top"
    >
      {children}
      <form method="dialog">
        <Button label="Close" handleClick={handleClose} />
      </form>
    </dialog>,
    document.body
  );
});

export default Modal;
