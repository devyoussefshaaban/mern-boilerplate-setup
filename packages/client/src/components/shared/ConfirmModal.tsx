import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  open: boolean;
  handleClose: () => void;
  modalContent: ModalContent;
}

const ConfirmModal: FC<IProps> = ({ open, handleClose, modalContent }) => {
  const { t } = useTranslation();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" textAlign="center">
          {modalContent?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalContent?.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={modalContent?.noBtn.action}>
            {modalContent?.noBtn.text}
          </Button>
          <Button onClick={modalContent?.yesBtn.action} autoFocus>
            {modalContent?.yesBtn.text}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmModal;
