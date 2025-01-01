import { IChildren } from "@/interface";
import { Sidebar } from "@/components/sidebar";

export default function ClientLayout({ children }: Readonly<IChildren>) {
  return (
    <div className="app_main_wrapper">
      <div className="app_container">
        <div className="app_inside_wrapp">
          <Sidebar />
          <div className="app_content">{children}</div>
          <div className="app_block">right</div>
        </div>
      </div>
    </div>
  );
}
