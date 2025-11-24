import { ARTIST_TATTOO_CONTENT } from './utils';

import styles from './styles.module.scss';
import { FadeInSection } from '@/shared';

const ArtistTattoo = () => {
    return (
        <div className={styles.artistTattooSection}>
            <div className={styles.artistTattooLeft}>
                <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.artistTattooTitle}>{ARTIST_TATTOO_CONTENT.artistTattooTitle}</FadeInSection>
                <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.artistTattooText}>{ARTIST_TATTOO_CONTENT.artistTattooText}</FadeInSection>
                <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.artistTattooText2}>{ARTIST_TATTOO_CONTENT.artistTattooText2}</FadeInSection>
                <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.artistTattooName}>{ARTIST_TATTOO_CONTENT.artistTattooName}</FadeInSection>
            </div>
        </div>
    );
}

export default ArtistTattoo;
