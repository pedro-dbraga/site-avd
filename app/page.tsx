"use client";

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
    </main>
  );
}
