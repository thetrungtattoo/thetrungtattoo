import { Routes, Route, useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTE_PATHS } from './config/path';
import { ToastProvider } from './common/toast/toastContext';
import { LoadingProvider, LoadingWrapper, ModalProvider } from './shared';
import HomePage from './components/homePage/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import QuickActions from './components/quickActions/quickActions';
import CopyRight from './components/copyright/copyright';
import Booking from './components/booking/booking';
import About from './components/about-us/about';
import Colection from './components/colections/colection';
import MessageModal from './components/colections/fullColection/messageModal';
import { useModal } from './shared/contexts/ModalContext';
import Services from './components/services/services';
import CustomTattoo from './components/services/page/custom/custom';
import PersonalizedTattoo from './components/services/page/personalized/personalized';
import TrainingWorkshop from './components/services/page/training/training';
import CareRemoval from './components/services/page/care/careRemoval';
import NotFound from './shared/components/NotFound/NotFound';
import Pricing from './components/pricing-tattoo/pricing';
import BannerPricing from './components/pricing-tattoo/banner/bannerPricing';
import NewsDetail from './components/news-detail/newsDetail';
import MeaningDetail from './components/meaning-detail/meaningDetail';
import LunarNewYear2026 from './components/Notification/LunarNewYear2026';

/**
 * Component để scroll về đầu trang mỗi khi route thay đổi
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Component hiển thị BannerPricing chỉ khi ở trang Pricing
 */
const ConditionalBanner = () => {
  const { pathname } = useLocation();

  if (pathname === ROUTE_PATHS.BUSINESS.PRICING) {
    return <BannerPricing />;
  }

  return null;
};

/**
 * Modal Component - Uses modal context
 */
const ModalComponent = () => {
  const { selectedProduct, isModalOpen, closeModal } = useModal();
  
  return (
    <MessageModal
      product={selectedProduct}
      isOpen={isModalOpen}
      onClose={closeModal}
    />
  );
};

/**
 * App Router - Main routing component với loading system
 * Hỗ trợ initial loading và page loading
 */
const AppRouter = () => {
  return (
    <ToastProvider>
      <LoadingProvider>
        <ModalProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <ConditionalBanner />
            <LoadingWrapper>
              <main className="main-content" style={{ position: 'relative' }}>
                <Routes>
                  <Route path={ROUTE_PATHS.ROOT} element={<HomePage />} />
                  <Route path={ROUTE_PATHS.BUSINESS.APPOINTMENT} element={<Booking />} />
                  <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
                  <Route path={ROUTE_PATHS.PRODUCTS} element={<Colection />} />
                  <Route path={ROUTE_PATHS.SERVICES} element={<Services />} />
                  <Route path={ROUTE_PATHS.SERVICE_TATTOO.CUSTOM_TATTOOS} element={<CustomTattoo />} />
                  <Route path={ROUTE_PATHS.SERVICE_TATTOO.PERSONALIZED_TATTOO} element={<PersonalizedTattoo />} />
                  <Route path={ROUTE_PATHS.SERVICE_TATTOO.TATTOO_CARE_REMOVAL} element={<CareRemoval />} />
                  <Route path={ROUTE_PATHS.SERVICE_TATTOO.TRAINING_WORKSHOP} element={<TrainingWorkshop />} />
                  <Route path={ROUTE_PATHS.BUSINESS.PRICING} element={<Pricing />} />
                  <Route path={ROUTE_PATHS.NEWS.DETAIL} element={<NewsDetail />} />
                  <Route path={ROUTE_PATHS.MEANING.DETAIL} element={<MeaningDetail />} />
                  <Route path="*" element={<NotFound />} />
                  </Routes>
                <QuickActions />
                <Footer />
              </main>
              <CopyRight />
            </LoadingWrapper>
            
            {/* Modal rendered at the highest level to avoid container constraints */}
            <ModalComponent />
            <LunarNewYear2026 />
          </BrowserRouter>
        </ModalProvider>
      </LoadingProvider>
    </ToastProvider>
  );
};

export default AppRouter;
