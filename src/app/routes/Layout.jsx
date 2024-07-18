import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { ScrollToTop } from '../../components/tariffs/tariffsPages/scrollToTop/ScrollToTop';
import { AllFixed } from '../../components/allFixed/AllFixed';
import NotFound from '../../pages/notFound/NotFound';
import SideBar from '../../components/sideBar/SideBar';
import '../styles/global.css';

// const definedPaths = [
//   '/',
//   '/mobile-connect/beautiful-number',
//   '/mobile-connect/tariffs',
//   '/conference-call',
//   '/mobile',
//   '/mobile-connect/tariffs/freedom',
//   '/mobile-connect/tariffs/secondFreedom',
//   '/mobile-connect/tariffs/businessLucky',
//   '/mobile-connect/tariffs/international',
//   '/mobile-connect/international-connection',
//   '/mobile-connect/international-connection/favorite-country-zoneOne',
//   '/mobile-connect/international-connection/basic-tarification-zoneOne',
//   '/article/:articleId',
//   '/mobile-connect/internet-packages',
//   '/mobile-connect/anti-determinant',
//   '/mobile-connect/roaming',
//   '/mobile-connect/roaming/roamingServices',
//   '/mobile-connect/roaming/roamingServices/connection1',
//   '/mobile-connect/roaming/roamingServices/connection2',
//   '/mobile-connect/roaming/roamingServices/connection3',
//   '/mobile-connect/roaming/roamingServices/connection4',
//   '/mobile-connect/roaming/roamForBusiness',
//   '/mobile-connect/ott-packages',
//   '/mobile-connect/ott-packages/telegram',
//   '/mobile-connect/ott-packages/whatsapp',
//   '/mobile-connect/ott-packages/instagram',
//   '/mobile-connect/ott-packages/youtube',
//   '/mobile-connect/ott-packages/tikTok',
//   '/mobile-connect/internet-for-m2m-devices',
//   '/mobile-modem',
//   '/mobile-vpn',
//   '/mobile-connect/tv-mobile-television',
//   '/mobile-connect/internet-distribution',
//   '/office-communication/virtual-pbx-international-connection',
//   '/office-communication',
//   '/office-communication/fixed-internet-tariffs',
//   '/office-communication/short-number',
//   '/office-communication/fixed-mobile-convergence',
//   '/office-communication/sip-office-telephony-roaming',
//   '/office-communication/virtual-pbx-international-connection',
//   '/products-based-big-data',
//   '/office-communication/fixed-mobile-convergence',
//   '/it-security/software-sale',
//   '/it-security/vpn-mobile-networks-tariffs',
//   '/itSecurity',
//   '/it-security/co-location-international-connection',
//   '/bigData-Beetarget',
//   '/bigData/-Financial-market-analytics',
//   '/bigData-scoring',
//   '/it-security/cloud-server-rental-equipment',
//   '/it-security/video-analytics',
//   '/bigData-heat-map',
//   '/bigData-custom-analytics',
//   '/mobile-connect/business-bonus',
//   '/office-communication/call-center-services-equipment',
//   '/503',
// ];

export const Layout = () => {
  // const location = useLocation();

  // const isNotFound = !definedPaths.includes(location.pathname);

  return (
    <div className="wrapper">
      <SideBar sideBarAdaptive="sideBarAdaptive" />
      <main className="main">
        <Header />
        <section className="outlet">
          <ScrollToTop />
          <Outlet />
        </section>
        <Footer />
      </main>
      <AllFixed />
    </div>
  );
};
