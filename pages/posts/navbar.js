import styles from '../../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='#'>Blogs</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='/posts/quote'>QOTD</a></li>
            </ul>
        </div>
    )
}

export default Navbar;