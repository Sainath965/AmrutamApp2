import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FrameComponent from "./FrameComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <form className={styles.desktop75}>
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
            <div className={styles.homeParent}>
              <div className={styles.home}>Home</div>
              <div className={styles.findDoctors}>find doctors</div>
              <div className={styles.aboutUs}>{`About us `}</div>
            </div>
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
      <section className={styles.frameContainer}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.findExpertDoctorsForAnInWrapper}>
            <h1
              className={styles.findExpertDoctors}
            >{`Find expert Doctors for an In-clinic session here `}</h1>
          </div>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.ellipseGroup}>
                <div className={styles.ellipseDiv} />
                <Form.Select className={styles.locationDropdownFormselect} />
              </div>
            </div>
            <div className={styles.searchBarWrapper}>
              <div className={styles.searchBar}>
                <input
                  className={styles.searchBarChild}
                  placeholder="eg. Doctor, specialisation, clinic name"
                  type="text"
                />
                <img
                  className={styles.iconsarrowForward24px}
                  alt=""
                  src="/iconsarrow-forward-24px.svg"
                />
              </div>
            </div>
            <div className={styles.frameChild1} />
          </div>
        </div>
      </section>
      <section className={styles.desktop75Inner}>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <Form.Select className={styles.frameFormselect} />
          <div className={styles.frameWrapper2}>
            <div className={styles.genderParent}>
              <div className={styles.gender}>Gender</div>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.feesParent}>
              <div className={styles.fees}>Fees</div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.languagesParent}>
              <div className={styles.languages}>Languages</div>
              <div className={styles.vectorFrame}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.allFiltersParent}>
            <div className={styles.allFilters}>All filters</div>
            <div className={styles.vectorWrapper1}>
              <img className={styles.vectorIcon3} alt="" src="/vector-1.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.desktop75Child}>
        <div className={styles.frameParent1}>
          <FrameComponent />
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <button className={styles.hairCareParent}>
                <div className={styles.hairCare}>{`Hair care `}</div>
                <div className={styles.frameWrapper5}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-39486.svg"
                  />
                </div>
              </button>
              <button className={styles.femaleParent}>
                <div className={styles.female}>Female</div>
                <div className={styles.frameWrapper6}>
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/group-39486-1.svg"
                  />
                </div>
              </button>
              <button className={styles.rs0Rs500Parent}>
                <div className={styles.rs0Rs500}>Rs.0-Rs.500</div>
                <div className={styles.frameWrapper7}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/group-39486-2.svg"
                  />
                </div>
              </button>
              <button className={styles.hindiParent}>
                <div className={styles.hindi}>Hindi</div>
                <div className={styles.frameWrapper8}>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/group-39486-1.svg"
                  />
                </div>
              </button>
            </div>
            <div className={styles.frameWrapper9}>
              <div className={styles.frameParent4}>
                <FrameComponent propMinWidth="unset" />
                <div className={styles.frameParent5}>
                  <div className={styles.frameWrapper10}>
                    <div className={styles.ellipseContainer}>
                      <img
                        className={styles.ellipseIcon}
                        alt=""
                        src="/ellipse-725@2x.png"
                      />
                      <button className={styles.sliderValue}>
                        <div className={styles.dropAreaLabel}>
                          <div className={styles.checkboxLabel}>4.5</div>
                        </div>
                        <img
                          className={styles.materialSymbolsstarIcon}
                          alt=""
                          src="/materialsymbolsstar.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div className={styles.frameWrapper11}>
                    <div className={styles.drPrernaNarangParent}>
                      <h1 className={styles.drPrernaNarang}>
                        Dr. Prerna Narang
                      </h1>
                      <div className={styles.frameParent6}>
                        <div className={styles.frameParent7}>
                          <div className={styles.frameParent8}>
                            <img
                              className={styles.frameIcon}
                              alt=""
                              src="/frame.svg"
                            />
                            <div className={styles.generalMedicalCheckup}>
                              Male-Female Infertility
                            </div>
                          </div>
                          <div className={styles.frameParent9}>
                            <img
                              className={styles.frameIcon1}
                              alt=""
                              src="/frame-1.svg"
                            />
                            <div className={styles.generalMedicalCheckup1}>
                              7 years of Experience
                            </div>
                          </div>
                          <div className={styles.comment1Parent}>
                            <img
                              className={styles.comment1Icon}
                              alt=""
                              src="/comment-1@2x.png"
                            />
                            <div className={styles.speaksEnglishHindi}>
                              Speaks: English, Hindi, Marathi
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameParent10}>
                          <div className={styles.videoConsultationParent}>
                            <div className={styles.videoConsultation}>
                              Video Consultation
                            </div>
                            <b className={styles.b}>₹800</b>
                          </div>
                          <div className={styles.chatConsultationParent}>
                            <div className={styles.chatConsultation}>
                              Chat Consultation
                            </div>
                            <b className={styles.free}>Free</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper12}>
                    <div className={styles.frameParent11}>
                      <div className={styles.frameWrapper13}>
                        <button className={styles.viewProfileWrapper}>
                          <div className={styles.viewProfile}>View Profile</div>
                        </button>
                      </div>
                      <button className={styles.bookAConsultationWrapper}>
                        <div className={styles.bookAConsultation}>
                          Book a consultation
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Desktop;
