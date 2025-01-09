import styles from "@/styles/bar/Navbar.module.scss";
import Container from "@/components/layout/Container";
import Logo from "@/components/layout/Logo";
import Link from "next/link";

import { FaRegBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

export default function Navbar() {
  const links = [
    { text: "Início", href: "/" },
    { text: "Séries", href: "/" },
    { text: "Filmes", href: "/" },
    { text: "Minha Lista", href: "/" },
  ];
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_container}>
          <div className={styles.header_start}>
            <nav className={styles.header_start_logo}>
              <Logo />
            </nav>
            <nav className={styles.header_start_links}>
              {links.map((link) => (
                <Link href={link.href} key={link.text}>
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.header_end}>
            <div className={styles.header_end_search}>
              <button id="search">
                <LuSearch />
              </button>
            </div>
            <div className={styles.header_end_bell}>
              <button id="bell">
                <FaRegBell />
              </button>
            </div>
            <div className={styles.header_end_user}>😃</div>
          </div>
        </div>
      </Container>
    </header>
  );
}
