import { useState } from "react";

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCashier, setIsOpenCashier] = useState(false);
  const [isOpenSpinner, setIsOpenSpinner] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onOpenCashier = () => {
    setIsOpenCashier(true);
  };

  const onOpenSpinner = () => {
    setIsOpenSpinner(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onCloseCashier = () => {
    setIsOpenCashier(false);
  };

  const onCloseSpinner = () => {
    setIsOpenSpinner(false);
  };

  return {
    isOpen,
    isOpenCashier,
    isOpenSpinner,
    onOpen,
    onOpenCashier,
    onOpenSpinner,
    onClose,
    onCloseCashier,
    onCloseSpinner,
  };
}