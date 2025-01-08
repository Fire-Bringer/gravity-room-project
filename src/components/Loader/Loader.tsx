import styles from './Loader.module.css';
import React, { useEffect } from 'react';
import { initLoaderAnimation } from './LoaderAnimation';


const LoaderPage = () => {
  useEffect(() => {
    initLoaderAnimation();
  }, []);

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.preLoader}>
          <p>Loading</p>

          <div className={styles.counter}>
            <div className={styles.digit1}>
              <div className={styles.num}>0</div>
              <div className={styles.numOffset}>1</div>
            </div>
            <div className={styles.digit2}>
              <div className={styles.num}>0</div>
              <div className={styles.numOffset}>1</div>
              <div className={styles.num}>2</div>
              <div className={styles.num}>3</div>
              <div className={styles.num}>4</div>
              <div className={styles.num}>5</div>
              <div className={styles.num}>6</div>
              <div className={styles.num}>7</div>
              <div className={styles.num}>8</div>
              <div className={styles.num}>9</div>
              <div className={styles.num}>0</div>
            </div>
            <div className={styles.digit3}>
              <div className={styles.num}>0</div>
              <div className={styles.num}>1</div>
              <div className={styles.num}>2</div>
              <div className={styles.num}>3</div>
              <div className={styles.num}>4</div>
              <div className={styles.num}>5</div>
              <div className={styles.num}>6</div>
              <div className={styles.num}>7</div>
              <div className={styles.num}>8</div>
              <div className={styles.num}>9</div>
            </div>
            <div className={styles.digit4}>%</div>
          </div>

          <div className={styles.progressBar}></div>
        </div>

        <div className={styles.heroImgs}>
          <img src="/images/img1.jpg" alt="" />
          <img src="/images/img2.jpg" alt="" />
          <img src="/images/img3.jpg" alt="" />
          <img src="/images/img4.jpg" alt="" />
          <img src="/images/img5.jpg" alt="" />
          <img src="/images/img6.jpg" alt="" />
          <img src="/images/img7.jpg" alt="" />
        </div>
      </section>

      <div className={styles.websiteContent}>
        <nav>
          <div className={styles.logo}><p>Logo</p></div>
          <div className={styles.siteInfo}>
            <p>(Photographer, creative director, filmmaker)</p>
          </div>
          <div className={styles.menu}><p>Menu</p></div>
        </nav>

        <div className={styles.header}><h1>Howard</h1></div>
      </div>
    </div>
  )
}

export default LoaderPage;
