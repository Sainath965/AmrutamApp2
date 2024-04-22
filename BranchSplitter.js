import { useMemo } from "react";
import styles from "./BranchSplitter.module.css";

const BranchSplitter = ({
  consultedForSkinCare,
  mightBeBitEarlyToConfirmB,
  propPadding,
  propPadding1,
  propWidth,
  propDisplay,
}) => {
  const branchSplitterStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const consultedForSkinStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={styles.branchSplitter} style={branchSplitterStyle}>
      <div className={styles.mergeOperatorParent} style={frameDiv1Style}>
        <div className={styles.mergeOperator}>
          <div className={styles.filter}>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-2608514@2x.png"
              />
              <div className={styles.alicentHightowerParent}>
                <div className={styles.alicentHightower}>Alicent Hightower</div>
                <div
                  className={styles.consultedForSkin}
                  style={consultedForSkinStyle}
                >
                  {consultedForSkinCare}
                </div>
              </div>
            </div>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <img
                className={styles.icon3}
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <img className={styles.icon4} alt="" src="/icon-2.svg" />
            </div>
          </div>
          <div className={styles.elseStatement}>
            <div className={styles.january2023}>20 January 2023</div>
          </div>
        </div>
        <div className={styles.mightBeBit}>{mightBeBitEarlyToConfirmB}</div>
      </div>
    </div>
  );
};

export default BranchSplitter;
