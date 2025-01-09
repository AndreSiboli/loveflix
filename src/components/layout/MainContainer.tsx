import { ReactNode } from "react";
import Navbar from "@/components/bar/Navbar";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
