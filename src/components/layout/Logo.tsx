import styles from "@/styles/layout/Logo.module.scss";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import Img from "../utils/Img";

import logo from '@/assets/logo.png'

const goth = Bebas_Neue({subsets: ['latin-ext'], weight: ["400"] });

export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${goth.className}`}>
      <Img src={logo} alt="Netflix's logo"/>
    </Link>
  );
}
