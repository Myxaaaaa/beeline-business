import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { ScrollToTop } from '../../components/tariffs/tariffsPages/scrollToTop/ScrollToTop';
import { AllFixed } from '../../components/allFixed/AllFixed';
import SideBar from '../../components/sideBar/SideBar';
import '../styles/global.scss';

export const Layout = () => {
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
