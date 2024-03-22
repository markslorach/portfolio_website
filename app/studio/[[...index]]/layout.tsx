// Compnents
import CmsNavBar from "@/app/components/CmsNavBar";

export default function StudioLayout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <CmsNavBar />
      <main>{children}</main>
    </div>
  );
}
