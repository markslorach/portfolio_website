// Compnents
import CmsNavBar from "@/app/components/CmsNavBar";

export default function StudioLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <CmsNavBar />
      <main>{children}</main>
    </>
  );
}
