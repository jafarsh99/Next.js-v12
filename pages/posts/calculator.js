import { useState } from "react";
import styles from "./posts.module.css";

export default function Calculator() {
  return (
<div className={styles.calculator}>
  <div className={styles.calculator__display}>0</div>
  <div className={styles.calculator__keys}>
  <button className={styles.key-operator} data-action="add">+</button>
  <button className={styles.key-operator} data-action="subtract">-</button>
  <button className={styles.key-operator} data-action="multiply">&times;</button>
  <button className={styles.key-operator} data-action="divide">÷</button>
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>0</button>
  <button data-action="decimal">.</button>
  <button data-action="clear">AC</button>
  <button className={styles.key-operator}ta-action="calculate">=</button>
  </div>
</div>
  );
}
