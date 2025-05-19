"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from '../page.module.css';

export function Footer() {
  
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/enviar-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mensagem }),
    });

    const texto = await res.text();
    if (res.ok) {
      setEmail('');
      setMensagem('');
      setResposta(texto);
    } else {
      setResposta(texto);
    }  
  };
    return (
        <footer className={styles.footer}>
            <div className={styles.especialista}>
                <div className={styles.especialistabox}>
                    <div className={styles.lineh}></div>
                    <h2 className={styles.tesp}>Fale com um Especialista</h2>
                    <div className={styles.espcontent}>
                    
                    <div className={styles.email3whats}>
                        <span className={styles.txt}>WhatsApp</span>
                        <span className={styles.txt}>Clique no botão abaixo!</span>
                        <a href="https://wa.me/5511942221441?text=Olá%2C+gostaria+de+desbloquear+minha+conta+bancária" 
                            target="_blank"
                            rel="noopener noreferrer"
                            ><Image src="/logowtapp.png" alt="whatsapp" width={50} height={50} /></a>
                    </div>
                    <div className={`${styles.linew} ${styles.notmobile}`}></div>
                    <div className={`${styles.lineh} ${styles.namemobile}`}></div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className={styles.email3whats}>
                        <span className={styles.txt}>Email</span>
                        <input className={styles.input}type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required/>
                        <textarea className={styles.inputtxt}  value={mensagem}
                                onChange={e => setMensagem(e.target.value)}
                                required/>
                        <button className={styles.button}>Enviar</button>
                        {<p className={styles.resp}>{resposta}</p>}
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className={styles.contato}>
                <div className={styles.lineh}></div>
                <h2 className={styles.tabout}>Contatos</h2>
                <div className={styles.contatobox}>
                    <div className={styles.contatoContent}>
                        <Image  className={styles.iconsf} src="/phone.svg" alt="logo" width={18} height={18} />
                        <span className={styles.txt}>(11)942221441</span>
                    </div>
                    <div className={styles.contatoContent}>
                        <Image    className={styles.iconsf} src="/mail.svg" alt="logo" width={20} height={16} />
                        <span className={styles.txt}>natanmolina@assp.org.br</span>
                    </div>
                    <div className={styles.contatoContent}>
                        <Image    className={styles.iconsf} src="/local.svg" alt="logo" width={20} height={20} />
                        <span className={styles.txt}>R. Catequese, 289. Butantã, São Paulo. Sp, CEP: 05502-020</span>
                    </div> 
                </div>

            </div>   
            <p className={styles.direitos}>© 2025 Todos os Direitos Reservados a Natan Iagui Molina</p>  
        </footer>
    );
}