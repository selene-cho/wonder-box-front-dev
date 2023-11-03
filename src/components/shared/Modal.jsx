import styles from './Modal.module.scss';

export default function Modal({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>{children}</div>
    </div>
  );
}