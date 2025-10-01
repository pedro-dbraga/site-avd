"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from '../page.module.css';

export function Footer() {
  
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/enviar-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email,celular, mensagem }),
    });

    const texto = await res.text();
    if (res.ok) {
      setEmail('');
      setCelular('');
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
                    <div className={styles.espdesktop}>
                        <div className={styles.espcontent}>
                        <div className={styles.whatsbox}>
                        <span className={styles.txt}>WhatsApp</span>
                        <span className={styles.txt}>Clique no botão abaixo!</span>
                        <div  className={styles.buttonwtapp}>
                            <a className={styles.insidewtapp} href="https://wa.me/5511921091441?text=Olá%2C+gostaria+de+desbloquear+minha+conta+bancária" 
                                target="_blank"
                                rel="noopener noreferrer">
                                <Image className={styles.wtapp} src="/logowtapp.png" alt="balance"  width={24} height={24}/><span>FALE COM UM ESPECIALISTA</span>
                            </a>
                        </div>
                        </div>
                        <form onSubmit={handleSubmit} className={`space-y-4 ${styles.form}`}>
                        <div className={styles.email3whats}>
                            <span className={styles.tittxt}>Contatar</span>
                            <span className={styles.txt}>Email</span>
                            <input className={styles.input}type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="exemplo@email.com"/>
                            <span className={styles.txt}>Celular</span>
                            <input className={styles.input}type="celular"
                                value={celular}
                                onChange={e => setCelular(e.target.value)}
                                required
                                placeholder="(DDD) 9 9999-9999"/>
                            <textarea placeholder="Escreva aqui sua mensagem ou dúvida." className={styles.inputtxt}  value={mensagem}
                                onChange={e => setMensagem(e.target.value)}
                                required/>
                            <button className={styles.button}>Enviar</button>
                            {<p className={styles.resp}>{resposta}</p>}
                        </div>
                        </form>
                        </div>
                        <Image className={styles.fotof} src="/contatenos.jpg" alt="fotocelular" width={377} height={566}/>
                    </div>
                    
                </div>
            </div>
            <div className={styles.contato}>
                <div className={styles.lineh}></div>
                <h2 className={styles.tabout}>Contatos</h2>
                <div className={styles.contatobox}>
                    <div className={styles.contatoContent}>
                        <Image  className={styles.iconsf} src="/phone.svg" alt="logo" width={18} height={18} />
                        <span className={styles.txt}>(11) 92109-1441</span>
                    </div>
                    <div className={styles.contatoContent}>
                        <Image    className={styles.iconsf} src="/mail.svg" alt="logo" width={20} height={16} />
                        <span className={styles.txt}>natanmolina@aasp.org.br</span>
                    </div>
                    <div className={styles.contatoContent}>
                        <Image    className={styles.iconsf} src="/local.svg" alt="logo" width={20} height={20} />
                        <span className={styles.txt}>Avenida Paulista nº 1439, 1º andar conjunto 12, Bela Vista, São Paulo/Sp, CEP: 01311-926</span>
                    </div> 
                </div>

            </div>   
            <p className={styles.direitos}>© 2025 Todos os Direitos Reservados a Natan Iagui Molina</p>  
        </footer>
    );
}