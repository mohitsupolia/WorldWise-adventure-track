import styles from "./Button.module.css";

export default function Button({children, onClick, type}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles.primary} ${styles[type]}`}>
      {children}
    </button>
  )
}
