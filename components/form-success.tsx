import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className="bg-green-400/15 p-2 rounded-md flex items-center gap-x-2 text-sm text-green-400">
      <BsCheck2Circle className="w-4" />
      <p>{message}</p>
    </div>
  );
}
