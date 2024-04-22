import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.image45Parent}>
          <img
            className={styles.image45Icon}
            loading="lazy"
            alt=""
            src="/image-45@2x.png"
          />
          <nav className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.findDoctors}>find doctors</div>
            <div className={styles.aboutUs}>{`About us `}</div>
          </nav>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.loginWrapper}>
            <div className={styles.login}>Login</div>
          </button>
          <button className={styles.signUpWrapper}>
            <div className={styles.signUp}>Sign-up</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
