"use client"
import { LoginForm } from "@/components/component/login-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Form() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleLoginForm = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <div>
      <Button onClick={toggleLoginForm}>Open Login Form</Button>
      {isOpen && <LoginForm onClose={toggleLoginForm} />}
    </div>
    </>
  );
}
