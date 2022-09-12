import { useState } from "react";

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCashier, setIsOpenCashier] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onOpenCashier = () => {
    setIsOpenCashier(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onCloseCashier = () => {
    setIsOpenCashier(false);
  };

  return {
    isOpen,
    isOpenCashier,
    onOpen,
    onOpenCashier,
    onClose,
    onCloseCashier,
  };
}