import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-2 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <BsExclamationCircle className="w-4" />
      <p>{message}</p>
    </div>
  );
}
