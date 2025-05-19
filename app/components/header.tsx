import Image from 'next/image';
import styles from '../page.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerbox}>
                            <Image className={styles.logo} src="/logonovo.png" alt="logo" width={151} height={100} />
            <p className={styles.namemobile}>Natan Molina</p>
            <p className={styles.notmobile}> Natan Iagui Molina</p>
            </div>

        </header>
    );
};