interface ModalContent {
  title: string;
  message: string;
  yesBtn: {
    text: string;
    action: () => void;
  };
  noBtn: {
    text: string;
    action: () => void;
  };
}
