import styles from "./index.module.scss";
import ButtonArrow from "../../assets/ButtonArrow";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "default",
  withArrow = false,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[variant]}`}>
      {children}
      {withArrow && <ButtonArrow />}
    </button>
  );
}
