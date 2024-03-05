import styles from './care-ui.module.css';

/* eslint-disable-next-line */
export interface CareUiProps {}

export function CareUi(props: CareUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CareUi!</h1>
    </div>
  );
}

export default CareUi;
