import Image from "next/image";
import styles from "../page.module.css";

export function About() {
 return (
    <div className={styles.about}>
        <div className={styles.aboutbox}>
            <div className={styles.lineh}></div>
            <h1 className={`${styles.titulo} ${styles.tabout}`}>Área de Atuação</h1>
            <div className={styles.areadeatuacao}> 
                <div className={styles.areabox}>
                  <Image className={styles.iconsa} src="/balance.svg" alt="balance"  width={100} height={50}/>
                 <p className={styles.textoatuacao}>Direito Tributario</p>
                </div>
                <div className={styles.areabox}>
                    <Image className={styles.iconsa} src="/build.svg" alt="building" width={100} height={50}/>
                    <p className={styles.textoatuacao}>Direito Empresarial</p>
                </div>
                <div className={styles.areabox}>
                    <Image className={styles.iconsa} src="/card.svg" alt="card" width={100} height={50}/>
                    <p className={styles.textoatuacao}>Direito Bancario</p>
                </div>
            </div>
            <div className={styles.lineh}></div>
            <div>
            <h2 className={`${styles.titulo} ${styles.tabout}`}>Sobre o Dr. Natan Iague Molina</h2>
            <div  className={styles.quemsou}>
                <Image src="/fotona.png" alt="fotoNatan" width={129} height={204}/>
                <div>
                    <p className={styles.size}>Advogado com sólida formação e atuação nas áreas de Direito Bancário,Empresarial e Tributário.</p>
                    <p className={styles.size}>Pós-graduado em Direito Tributário pela PUC-SP, Natan Iague Molina possui experiência no contencioso e consultivo cível e societário, atendendo demandas estratégicas e massificadas. </p>
                    <p className={styles.size}>Atuou em escritórios renomados e órgãos públicos, com forte presença em contratos, execuções fiscais e planejamento tributário.</p>
                </div> 
            </div>
        </div>
        </div>
    </div>
);};