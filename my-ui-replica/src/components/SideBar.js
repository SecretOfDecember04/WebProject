import Link from 'next/link';
import styles from './Sidebar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>Unititled UI</div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/">All Files</Link>
            </nav>
        </div>
    );
};

export default SideBar;