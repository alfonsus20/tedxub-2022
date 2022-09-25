import { useState } from "react";

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCashier, setIsOpenCashier] = useState(false);
  const [isOpenSpinner, setIsOpenSpinner] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onOpenCashier = () => {
    setIsOpenCashier(true);
  };

  const onOpenSpinner = () => {
    setIsOpenSpinner(true);
  };

  const onOpenAlert = () => {
    setIsOpenAlert(true);
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

  const onCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return {
    isOpen,
    isOpenCashier,
    isOpenSpinner,
    isOpenAlert,
    onOpen,
    onOpenCashier,
    onOpenSpinner,
    onOpenAlert,
    onClose,
    onCloseCashier,
    onCloseSpinner,
    onCloseAlert,
  };
}