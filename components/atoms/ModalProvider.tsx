"use client";

import { useEffect } from "react";
import Modal from "react-modal";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return <>{children}</>;
}
