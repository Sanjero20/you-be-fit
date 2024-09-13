import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
