"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/shared/assets/icons/ControlPanel/Home.svg";
import "./style.css";
interface ControlPanelLayoutProps {
  children: React.ReactNode;
}

export function ControlPanelLayout({ children }: ControlPanelLayoutProps) {
  const pathname = usePathname();

  return (
    <section className="orders">
      <div className="link">
        <Link href="#">
          <img src={Home.src} alt="logo" />
          ЛИЧНЫЙ КАБИНЕТ
        </Link>
      </div>
      <div className="orders-container">
        <aside className="orders-sidebar">
          <ul>
            <li className={pathname === "/control-panel" ? "active" : ""}>
              <Link href="/control-panel">Мои заказы</Link>
            </li>
            <li className={pathname?.includes("/password") ? "active" : ""}>
              <Link href="/control-panel/password">Сменить пароль</Link>
            </li>
            <li className={pathname?.includes("/email") ? "active" : ""}>
              <Link href="/control-panel/email">Сменить E-mail</Link>
            </li>
          </ul>
        </aside>
        {children}
      </div>
    </section>
  );
}






