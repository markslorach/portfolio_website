// Compnents
import CmsNavBar from "@/app/components/CmsNavBar";
import { ReactNode } from "react";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CmsNavBar />
      <main>{children}</main>
    </>
  );
}
