import styles from '../page.module.css';
import Image from "next/image";


export function Content() {

    return (
        <div className={styles.content}>
            <div className={styles.firstcontent}>
                <Image className={styles.fotocontent} src="/original.jpg" alt="foto" width={389} height={389}/>
                <div>
                    <h1 className={styles.titulo}>Conta Bancária Bloqueada? </h1>
                    <h3 className={styles.contentsubtit}>Você pode ter direito á liberação de valores</h3>
                    <p className={styles.contenttexto}>Caso você possua valores bloqueados em conta corrente de até 40 (quarenta) salários mínimos, ou qualquer quantia depositada em conta salário, conta de aposentadoria ou de pensão, é possível ter direito à liberação desses recursos.</p>
                    
                    <div  className={styles.buttonwtapp}>
                    <a className={styles.insidewtapp} href="https://wa.me/5511921091441?text=Olá%2C+gostaria+de+desbloquear+minha+conta+bancária" 
                            target="_blank"
                            rel="noopener noreferrer"><Image className={styles.wtapp} src="/logowtapp.png" alt="balance"  width={24} height={24}/><span>FALE COM UM ESPECIALISTA</span></a>
                    </div>
                </div>
            </div>
           
            <div className={styles.lineh}></div>
            <div>
                <h2 className={styles.titulo}>Como o Dr. Natan Pode Ajudar?</h2>
                <p className={styles.contenttexto}>O Dr. Natan é advogado especialista em especialista em direito tributário pela Pontifícia Universidade Católica de São Paulo (PUC-SP), com amplo conhecimento em processos de execução e desbloqueio de conta bancária.</p>
            </div>
        </div>
    );}