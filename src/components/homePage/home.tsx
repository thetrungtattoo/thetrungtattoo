import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AboutStudio from './components/aboutStudio/aboutStudio';
import BrandPhilosophy from './components/brandPhilosophy/brandPhilosophy';
import ArtistTattoo from './components/artist-tattoo/artistTattoo';
import HeroBanner from './components/heroBanner/heroBanner';
import LatestNews from './components/latestNews/latestNews';
import OurPartners from './components/ourPartners/ourPartners';
import ProcessOverview from './components/processOverview/processOverview';
import StudioHighlights from './components/studioHighlights/studioHighlights';
import TattooCollections from './components/tattooCollections/tattooCollections';
import FAQ from './components/FAQ/FAQ';
import ContactInfo from './components/contactInfo/contactInfo';
import Booking from './components/bookingCTA/bookingCTA';
import MeaningTattoos from './components/meaningTattoos/meaningTattoos';
import TeamStats from './components/team-stats/teamStats';
import OurValues from './components/our-values/ourValues';
import FeedBack from './components/feedback/feed-back';
import styles from './styles.module.scss';

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hasScrolled = useRef(false);

    useEffect(() => {
        const state = location.state as { scrollToSection?: string; skipLoading?: boolean } | null;
        if (state?.scrollToSection && !hasScrolled.current) {
            const element = document.getElementById(state.scrollToSection);
            if (element) {
                hasScrolled.current = true;
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navigate('/', { replace: true, state: null });
                }, 100);
            }
        }
        if (!state?.scrollToSection) {
            hasScrolled.current = false;
        }
    }, [location.state, navigate]);

    return (
        <div className={styles.homePageContainer}>
            {/* 1. Hero Banner */}
            <div className={styles.section}>
                <HeroBanner />
            </div>

            {/* 5. Thống kê đội ngũ (Team Stats) */}
            <div className={styles.section}>
                <TeamStats />
            </div>

            {/* 2. Giới thiệu ngắn về studio + 5 Tiêu Chuẩn Vàng */}
            <div className={styles.section}>
                <AboutStudio />
            </div>

            {/* 3. Điều gì làm nên giá trị khác biệt (Brand Philosophy) */}
            <div className={styles.section}>
                <BrandPhilosophy />
            </div>

            {/* 4. Sứ mệnh – Tầm nhìn – Giá trị cốt lõi */}
            <div className={styles.section}>
                <OurValues />
            </div>

            {/* 6. Artist Quote / ArtistTattoo */}
            <div className={styles.section}>
                <ArtistTattoo />
            </div>

            {/* 7. Studio Highlights – Điều gì làm chúng tôi khác biệt */}
            <div className={styles.section}>
                <StudioHighlights />
            </div>

            {/* 10. Quy trình thực hiện (Process Overview) */}
            <div className={styles.section}>
                <ProcessOverview />
            </div>

            {/* 8. Bộ sưu tập (Tattoo Collections) */}
            <div className={styles.section}>
                <TattooCollections />
            </div>

            {/* 9. Ý nghĩa hình xăm (Meaning Tattoos) */}
            <div id="meaning-tattoos" className={styles.section}>
                <MeaningTattoos />
            </div>

            {/* 11. Feedback / Testimonials */}
            <div className={styles.section}>
                <FeedBack />
            </div>

            {/* 15. Đặt lịch ngay (Booking CTA) */}
            <div className={styles.section}>
                <Booking />
            </div>

            {/* 16. Thông tin liên hệ & Giờ mở cửa */}
            <div className={styles.section}>
                <ContactInfo />
            </div>

            {/* 12. Đơn vị hợp tác (Our Partners) */}
            <div className={styles.section}>
                <OurPartners />
            </div>

            {/* 13. Tin tức / Blog (Latest News) */}
            <div id="latest-news" className={styles.section}>
                <LatestNews />
            </div>

            {/* 14. Câu hỏi thường gặp (FAQ) */}
            <div id="faq-section" className={styles.section}>
                <FAQ />
            </div>
        </div>

    );
}

export default HomePage;
