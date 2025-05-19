import styles from '../page.module.css';

export function Content() {
    return (
        <div className={styles.content}>
            <div>
                <h1 className={styles.titulo}>Aposentado com Doença Grave?</h1>
                <h3 className={styles.contentsubtit}>Você Pode Estar Pagando Imposto de Renda Indevidamente</h3>
                <p className={styles.contenttexto}>Você sabia que aposentados diagnosticados com determinadas doenças graves têm direito à isenção total do Imposto de Renda sobre seus proventos? Esse benefício é garantido por lei e pode representar uma economia significativa no seu orçamento mensal. </p>
            </div>
            <div className={styles.lineh}></div>
            <div>
                <h2 className={styles.titulo}>Quem Tem Direito à Isenção?</h2>
                <p className={styles.contenttexto}>De acordo com a Lei nº 7.713/1988, aposentados e pensionistas que possuem doenças graves, como câncer, cardiopatias, Parkinson, entre outras, têm direito à isenção do Imposto de Renda sobre os valores recebidos a título de aposentadoria ou pensão. Importante destacar que, conforme entendimento do Superior Tribunal de Justiça (STJ), não é necessário que a doença esteja ativa no momento do pedido; o diagnóstico, mesmo que antigo, já é suficiente para garantir o direito à isenção. </p>
            </div>
            <div className={styles.lineh}></div>
            <div>
                <h2 className={styles.titulo}>Como Solicitar a Isenção?</h2>
                <p className={styles.contenttexto}>O processo pode ser realizado de forma simples e gratuita através do portal ou aplicativo “Meu INSS”. Basta acessar a plataforma, selecionar a opção “Novo Pedido”, digitar “isenção de imposto de renda” e seguir as instruções. Será necessário apresentar documentos médicos oficiais que comprovem o diagnóstico da doença.</p>
            </div>
            <div className={styles.lineh}></div>
            <div>
                <h2 className={styles.titulo}>Restituição de Valores Pagos Indevidamente</h2>
                <p className={styles.contenttexto}>Além da isenção futura, é possível solicitar a restituição dos valores de Imposto de Renda pagos nos últimos cinco anos, desde a data do diagnóstico da doença. Esse processo pode resultar em uma quantia significativa a ser devolvida ao contribuinte.</p>
            </div>
        </div>
    );}