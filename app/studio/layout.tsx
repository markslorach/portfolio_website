// Compnents
import StudioNavBar from "@/app/studio/StudioNavBar";

export default function StudioLayout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <StudioNavBar/>
      <main>{children}</main>
    </div>
  );
}
