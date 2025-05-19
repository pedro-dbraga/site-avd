import styles from '../page.module.css';

export function Content() {
    return (
        <div className={styles.content}>
            <div>
                <h1 className={styles.titulo}>Sofreu Bloqueio Bancário? </h1>
                <h3 className={styles.contentsubtit}>Você Pode Ter Direito à Liberação de Valores</h3>
                <p className={styles.contenttexto}>Você teve dinheiro bloqueado na conta corrente por ordem judicial? Saiba que o Superior Tribunal de Justiça (STJ) decidiu que, mesmo em conta corrente ou aplicações financeiras, valores de até 40 salários mínimos podem ser considerados impenhoráveis  desde que sejam usados para garantir o seu sustento e de sua família.</p>
                <p className={styles.contenttexto}>Essa decisão representa um avanço importante na proteção de quem passa por dificuldades financeiras e está enfrentando processos de execução, dívidas judiciais ou cobranças indevidas.</p>
            </div>
            <div className={styles.lineh}></div>
            <div>
                <h2 className={styles.titulo}>Como o Dr. Natan Pode Ajudar?</h2>
                <p className={styles.contenttexto}>O Dr. Natan é advogado na área do Direito Civil e com amplo conhecimento em desbloqueio bancário e experiência na liberação de valores bloqueados judicialmente. Atuamos com agilidade e estratégia para garantir que seus direitos sejam respeitados e que você tenha acesso ao que é seu por direito.</p>
            </div>
        </div>
    );}