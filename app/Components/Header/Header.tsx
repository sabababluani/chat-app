import styles from './Header.module.scss';
import Image from 'next/image';

interface Props {
  userName: string;
  pfp: string;
}

const Header = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <Image src={props.pfp} alt="pfp" width={56} height={56} />
        </div>
        <div className={styles.chatName}>
          <span>{props.userName}</span>
          <span className={styles.status}>Active</span>
        </div>
      </div>
      <div className={styles.ringContainer}>
        <Image src='/phone.png' alt='phone' width={40} height={40}/>
        <Image src='/camera.png' alt='camera' width={40} height={40}/>
      </div>
    </div>
  );
};

export default Header;
