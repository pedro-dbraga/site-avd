"use client";
import styles from "./page.module.css";
import Image from "next/image";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { About } from "./components/about";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Content/>
      <About/>
      <Footer/>
      <a href="https://wa.me/5511921091441?text=Olá%2C+gostaria+de+desbloquear+minha+conta+bancária" className={styles.floatingwapp} target="_blank" rel="noopener noreferrer">
        <Image src="/logowtapp.png" alt="WhatsApp" width={60} height={60}/>
      </a>
    </main>
  );
}
