import styles from './styles.module.scss';
import { procedureSteps } from './config';
import { FadeInSection } from '@/shared';

const ProcessOverview = () => {
    return (
        <div className={styles.procedureSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <FadeInSection direction="slideFromLeft" duration={0.5} delay={200} threshold={0.1} triggerOnce={false}>
                        <span className={styles.title}>Quy trình thực hiện</span>
                    </FadeInSection>
                    <FadeInSection direction="slideFromRight" duration={0.5} delay={200} threshold={0.1} triggerOnce={false}>
                        <span className={styles.subtitle}>
                            6 bước hoàn thiện hình xăm từ ý tưởng đến thành phẩm
                        </span>
                    </FadeInSection>
                </div>

                <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine} />
                    <div className={styles.timeline}>
                        {procedureSteps.map((step) => {
                            const isEven = step.id % 2 === 0;
                            return (
                                <div
                                    key={step.id}
                                    className={`${styles.step} ${isEven ? styles.stepLeft : styles.stepRight}`}
                                >
                                    <FadeInSection direction="fadeIn" duration={0.5} delay={200} threshold={0.1} triggerOnce={false} className={styles.stepIcon}>{step.icon()}</FadeInSection>
                                    <div className={styles.stepContent}>
                                        <FadeInSection
                                            direction={isEven ? "slideFromLeft" : "slideFromRight"}
                                            duration={0.5}
                                            delay={200}
                                            threshold={0.2}
                                            triggerOnce={false}
                                        >
                                            <span className={styles.stepNumber}>{step.stepNumber}</span>
                                        </FadeInSection>
                                        <FadeInSection
                                            direction={isEven ? "slideFromLeft" : "slideFromRight"}
                                            duration={0.5}
                                            delay={200}
                                            threshold={0.2}
                                            triggerOnce={false}
                                        >
                                            <span className={styles.stepTitle}>{step.title}</span>
                                        </FadeInSection>
                                        <FadeInSection
                                            direction={isEven ? "slideFromLeft" : "slideFromRight"}
                                            duration={0.5}
                                            delay={200}
                                            threshold={0.2}
                                            triggerOnce={false}
                                        >
                                            <span className={styles.stepSubtitle}>{step.subtitle}</span>
                                        </FadeInSection>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessOverview;
