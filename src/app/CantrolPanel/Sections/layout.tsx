"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  return (
    <section className="orders">
      <div className="orders-container">

        {/* SIDEBAR */}
        <aside className="orders-sidebar">
          <ul>
            <li className={pathname.includes("/orders") ? "active" : ""}>
              <Link href="/controlpanel/Sections/orders">
                Мои заказы
              </Link>
            </li>

            <li className={pathname.includes("/password") ? "active" : ""}>
              <Link href="/controlpanel/Sections/password">
                Сменить пароль
              </Link>
            </li>

            <li className={pathname.includes("/email") ? "active" : ""}>
              <Link href="/controlpanel/Sections/email">
                Сменить E-mail
              </Link>
            </li>
          </ul>
        </aside>

        {/* CONTENT */}
        <main className="orders-content">
          {children}
        </main>

      </div>
    </section>
  );
}
