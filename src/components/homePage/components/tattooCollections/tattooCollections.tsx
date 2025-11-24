/**
 * 
 * Section: BỘ SƯU TẬP TATTOO CỦA STUDIO
 * 
*/

import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import CollectionItem from './CollectionItem';
import { AngleRight } from '@/assets/svg/svg';
import { ROUTE_PATHS } from '@/config/path';
import { getItemSizeClass } from './utils';
import FadeInSection from '@/shared/components/fadeInSection/fadeInSection';
import { SECTION_COLLECTION_DATA } from '@/database/section-collection';

const TattooCollections = () => {
  const navigate = useNavigate();

  const handleItemSelect = (index: number) => {
    // Handle item selection logic here if needed
    console.log('Item selected:', index);
  };

  const handleViewMoreClick = () => {
    navigate(ROUTE_PATHS.PRODUCTS);
  };

  return (
    <section className={styles.collectionSection}>
      <div className={styles.collectionSectionLeft}>
        <div className={styles.titleContainer}>
          <FadeInSection direction="slideFromTop" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.subtitleTop}>Dự án của chúng tôi</FadeInSection>
          <FadeInSection direction="slideFromRight" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.title}>Bộ sưu tập</FadeInSection>
          <FadeInSection direction="slideFromLeft" threshold={0.1} triggerOnce={false} duration={0.5} delay={200} className={styles.subtitle}>
            Mỗi tác phẩm tại Studio đều mang đến câu chuyện riêng biệt và thể hiện sự tinh tế trong từng chi tiết.
          </FadeInSection>
          <FadeInSection direction="slideFromBottom" threshold={0.1} triggerOnce={false} duration={0.5} delay={200}>
            <span
              className={styles.collectionSectionButton}
              onClick={handleViewMoreClick}
            >
              Xem thêm
              <AngleRight />
            </span>
          </FadeInSection>
        </div>
      </div>
      <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={300} className={styles.collectionSectionRight}>
        <FadeInSection direction="fadeIn" threshold={0.1} triggerOnce={false} duration={0.5} delay={400} className={styles.masonryGrid}>
          {SECTION_COLLECTION_DATA.map((item, index) => (
            <CollectionItem
              key={item.id}
              item={item}
              index={index}
              sizeClass={getItemSizeClass(index)}
              onSelect={handleItemSelect}
            />
          ))}
        </FadeInSection>
      </FadeInSection>
    </section>
  );
};

export default TattooCollections;

