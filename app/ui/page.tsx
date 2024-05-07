"use client"

import { LoginForm } from "@/components/component/login-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Ui() {
  return (
    <> 
      <Button variant="outline">Button</Button>
      <LoginForm/>
    </>
  );
}
