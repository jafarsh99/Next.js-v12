import RandomQuote from "../api/random-quote";
import styles from './posts.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Hello here!, Click the button for amazing quote!</h3>
      <RandomQuote />
    </div>
  );
};

export default HomePage;
