import { useRef } from 'react';
import { ABOUT_CONTENT } from './hooks/config';
import Team1 from '@/assets/images/teams/teams1.jpg';
import Team2 from '@/assets/images/teams/teams2.jpg';
import Team3 from '@/assets/images/teams/teams3.jpg';
import Team4 from '@/assets/images/teams/teams4.jpg';
import Team5 from '@/assets/images/teams/teams5.jpg';
import Team6 from '@/assets/images/teams/teams6.jpg';
import Team7 from '@/assets/images/teams/teams7.jpg';
import Team8 from '@/assets/images/teams/teams8.jpg';
import Team9 from '@/assets/images/teams/teams9.jpg';
import Team10 from '@/assets/images/teams/teams10.jpg';
import flower from '@/assets/svg/flower.svg';
import Avatar from '@/assets/images/about-us/about-us.svg';
import AboutHero from '@/assets/images/about-us/about-hero.svg';
import Booking from '../homePage/components/bookingCTA/bookingCTA';
import { FadeInSection, useCounterAnimation, useFlowerAnimation, useTeamCarousel } from '@/shared';
import { COMPANY_FACTS, ANIMATION_TIMING } from './hooks/about';
import ExtraNavigation from '../extra-navigation/extra-navigation';

import styles from './styles.module.scss';

/**
 * 
 * About Component - Trang giới thiệu về Studio
 * 
 */

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamContainerRef = useRef<HTMLDivElement>(null);

  const teamImages = [Team1, Team2, Team3, Team4, Team5, Team6, Team7, Team8, Team9, Team10];

  const { countersState, formatNumber } = useCounterAnimation(COMPANY_FACTS, {
    isVisible: true
  });

  const { loadedFlowers } = useFlowerAnimation();

  const { scrollLeft, scrollRight, getVisibleImages } = useTeamCarousel({
    images: teamImages,
    visibleCount: 5
  });

  return (
    <div className={styles.aboutUsContainer}>

      <div className={styles.aboutHero}>
        <FadeInSection className={styles.aboutHeroContent} direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
          <span className={styles.aboutHeroTitle}>Giới thiệu về chúng tôi</span>
          <span className={styles.aboutHeroSubTitle}>"Hình xăm không chỉ là những nét mực trên da, mà là câu chuyện riêng của mỗi khách hàng, là những mảnh ký ức, tâm tư được tôi chạm khắc bằng cả trái tim và tâm hồn qua từng mũi kim, nét mực." <span className={styles.aboutSubTitleAuthor}>-- Artist Thế Trung --</span></span>
          <span className={styles.aboutHeroSubText}>
            Chúng tôi đặt an toàn và vệ sinh lên hàng đầu song song với nghệ thuật xăm. Dụng cụ được khử trùng bằng máy Autoclave hiện đại, mực xăm đạt chuẩn quốc tế, và toàn bộ quy trình diễn ra trong môi trường vô trùng tuyệt đối. Với The Trung Tattoo, mỗi nét mực là sự trân trọng và sáng tạo, mang đến hình xăm đẹp – an toàn – bền vững theo thời gian.
          </span>
        </FadeInSection>
        <FadeInSection className={styles.aboutHeroImage} direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
          <img src={AboutHero} alt="About Hero" />
        </FadeInSection>
      </div>

      {/* Những con số biết nói */}
      <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
        <section ref={sectionRef} className={styles.companyFactsSection}>
          <div className={styles.container}>
            <div className={styles.header}>
              <span className={styles.subtitle} >Thành tựu của Studio - Chúng tôi tự hào về đội ngũ của mình</span>
              <span className={styles.title} >Những con số biết nói !</span>
            </div>

            <div className={styles.factsGrid}>
              {COMPANY_FACTS.map((fact, index) => (
                <FadeInSection
                  key={fact.id}
                  direction="fadeIn"
                  threshold={0.1} triggerOnce={false} duration={0.5}
                  delay={index * ANIMATION_TIMING.STAGGER_DELAY}
                  className="stagger-1"
                >
                  <div className={styles.factItem}>
                    <div className={styles.numberContainer}>
                      <span className={styles.number}>
                        {formatNumber(countersState[fact.id] || 0)}
                      </span>
                      {fact.suffix && (
                        <span className={styles.suffix}>{fact.suffix}</span>
                      )}
                    </div>
                    <p className={styles.label}>{fact.label}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Nội dung chính về Studio */}
      <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
        <div className={styles.aboutContainer}>
          <div className={styles.heroContent}>
            <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
              <span className={styles.aboutTitle}>{ABOUT_CONTENT.aboutTitle}</span>
            </FadeInSection>
            <div className={styles.aboutSubTitleContainer}>
              <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                <span className={styles.aboutSubTitle}> {ABOUT_CONTENT.aboutSubTitle}</span>
              </FadeInSection>
              <div className={styles.flowerContainer}>
                {Array.from({ length: 3 }, (_, index) => (
                  <img
                    key={index}
                    src={flower}
                    alt=""
                    className={`${styles.flower} ${loadedFlowers.includes(index) ? styles.flowerLoaded : styles.flowerHidden
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.aboutSection}>
            {/* Section 1 */}
              <div className={styles.sectionFormation}>
                <div className={styles.aboutText}>
                  <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span>{ABOUT_CONTENT.aboutText[0].text1}</span>
                  </FadeInSection>
                  <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span>{ABOUT_CONTENT.aboutText[0].text2}</span>
                  </FadeInSection>
                  <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span>{ABOUT_CONTENT.aboutText[0].text3}</span>
                  </FadeInSection>
                  <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span>{ABOUT_CONTENT.aboutText[0].text4}</span>
                  </FadeInSection>
                </div>
              </div>

            {/* Section 2 */}
            <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
              <div className={styles.sectionConscience}>
                <span className={styles.conscienceTitle}>{ABOUT_CONTENT.aboutTitle2}</span>
                <div className={styles.aboutText1}>
                  <div className={styles.aboutText1Content}>
                    <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                      <span>{ABOUT_CONTENT.aboutText2[0].text1}</span>
                    </FadeInSection>
                    <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                      <span>{ABOUT_CONTENT.aboutText2[0].text2}</span>
                    </FadeInSection>
                    <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                      <span>{ABOUT_CONTENT.aboutText2[0].text3}</span>
                    </FadeInSection>
                  </div>
                  <FadeInSection className={styles.aboutText1Image} direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <img src={Avatar} alt="" />
                  </FadeInSection>
                </div>
                <div className={styles.aboutText2}>
                  <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span>{ABOUT_CONTENT.aboutText2[0].text4}</span>
                  </FadeInSection>
                </div>
              </div>
            </FadeInSection>

            {/* Section 3 */}
            <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
              <div className={styles.sectionPassion}>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                  <span className={styles.passionTitle}>{ABOUT_CONTENT.aboutTitle3}</span>
                </FadeInSection>
                <div className={styles.aboutText}>
                  <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                    <span>{ABOUT_CONTENT.aboutText3[0].text1}</span>
                  </FadeInSection>
                  <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                  <span>{ABOUT_CONTENT.aboutText3[0].text2}</span>
                  </FadeInSection>
                  <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
                  <span>{ABOUT_CONTENT.aboutText3[0].text3}</span>
                  </FadeInSection>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Đội ngũ nghệ sĩ */}
      <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
        <div className={styles.teamSection}>
          <div className={styles.teamContainer}>
            <span className={styles.teamTitle}>Một số hình ảnh thường nhật tại Studio</span>
            <div className={styles.teamCarousel}>
              <button
                className={styles.navButton}
                onClick={scrollLeft}
                aria-label="Previous images"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={styles.teamImagesContainer} ref={teamContainerRef}>
                {getVisibleImages().map((image, index) => (
                  <FadeInSection
                    key={index}
                    direction="fadeIn"
                    threshold={0.1} triggerOnce={false} duration={0.5}
                    delay={index * ANIMATION_TIMING.TEAM_IMAGE_DELAY}
                    className="stagger-1"
                  >
                    <div className={styles.teamImageWrapper}>
                      <img
                        src={image}
                        alt={`Studio team image ${index + 1}`}
                        className={styles.teamImage}
                      />
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <button
                className={styles.navButton}
                onClick={scrollRight}
                aria-label="Next images"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
      <Booking />
      </FadeInSection>


      <ExtraNavigation />
    </div>
  );
}

export default About;
