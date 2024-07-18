import { createBrowserRouter } from 'react-router-dom';
import { BeautifulNumbPage } from '../../pages/beautifulNumb/BeautifulNumbPage';
import { Tariffs } from '../../pages/tariffs/Tariffs';
import { Mobile } from '../../pages/mobile/Mobile';
import { Freedom } from '../../components/tariffs/tariffsPages/freedom/Freedom';
import { International } from '../../components/tariffs/tariffsPages/international/International';
import { HomePage } from '../../pages/home/HomePage';
import { Layout } from './Layout';
import { InternationalCon } from '../../pages/internationalConnection/InternationalCon';
import { FavoriteCountryPage } from '../../pages/internationalConnection/favoriteCountryPage/FavoriteCountryPage';
import { BasicTariffingPage } from '../../pages/internationalConnection/basicTariffingPage/BasicTariffingPage';
import { InternetPackages } from '../../pages/internetPackages/InternetPackages';
import { Roaming } from '../../pages/roaming/Roaming';
import { RoamingServices } from '../../components/roaming/roamingPages/roamingServices/RoamingServices';
import { Connection } from '../../components/roaming/roamingPages/roamingServices/connection/Connection';
import { RoamingForBusiness } from '../../components/roaming/roamingPages/roamForBusiness/RoamForBusiness';
import { OttPackages } from '../../pages/ottPackages/OttPackages';
import { OttTelegram } from '../../components/ottPackages/ottPages/ottTelegram/OttTelegram';
import { AntiDeterminant } from '../../pages/antiDeterminant/AntiDeterminant';
import { M2MPage } from '../../pages/m2mMobile/M2MPage';
import { Vpn } from '../../components/m2mMobile/rest/vpn/Vpn';
import { Modem } from '../../components/m2mMobile/rest/modem/Modem';
import { TelevisionPage } from '../../pages/mobileTelevision/TelevisionPage';
import { GiveAwayInternet } from '../../pages/giveAwayInternet/GiveAwayInternet';
import { ConferenceCall } from '../../pages/conferenceCall/ConferenceCall';
import { FixedInternet } from '../../pages/officePages/fixedInternet/FixedInternet';
import { VirtualPbx } from '../../pages/officePages/VirtualPbx/VirtualPbx';
import { ShortNumber } from '../../pages/officePages/shortNumber/ShortNumber';
import { FixedMobileCon } from '../../pages/officePages/FixedMobileCon/FixedMobileCon';
import { SipTelephony } from '../../pages/officePages/sipTelephony/SipTelephony';
import { SoftwareSales } from '../../pages/itSecurity/softwareSales/SoftwareSales';
import { OfficePage } from '../../pages/officePages/homePage/OfficePage';
import { BeeTaget } from '../../pages/bigDataPages/beetarget/BeeTaget';
import { ItSecurity } from '../../pages/itSecurity/itSecurityHome/ItSecurity';
import { Analytics } from '../../pages/bigDataPages/analytics/Analytics';
import { Skorring } from '../../pages/bigDataPages/skorring/Skorring';
import { CloudServer } from '../../pages/itSecurity/ cloudServer/CloudServer';
import { VpnUnification } from '../../pages/itSecurity/vpnUnification/VpnUnification';
import { CoLocation } from '../../pages/itSecurity/coLocation/CoLocation';
import { VideoAnalytics } from '../../pages/itSecurity/videoAnalytics/VideoAnalytics';
import { BigData } from '../../pages/bigDataPages/bigData/BigData';
import { Api, baseGetRequest } from '../../shared/api/Api';
import { ArticleComponents } from '../../components/articleComponents/ArticleComponents';
import { HeatMap } from '../../pages/bigDataPages/heatMap/HeatMap';
import { CustomAnalytics } from '../../pages/bigDataPages/customAnalytics/CustomAnalytics';
import { BusinessBonus } from '../../pages/businessBonus/BusinessBonus';
import { CallCenterServices } from '../../pages/officePages/callCenterServices/CallCenterServices';
import NotFound from '../../pages/notFound/NotFound';
import ServiceUnavailable from '../../pages/serviceUnavailable/ServiceUnavailable';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ServiceUnavailable />,

    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <HomePage />,
        loader: async () => {
          const banner = await Api.getBannerHome();
          const res = await Api.getTariffs();
          return { banner: banner.data, resData: res.data };
        },
      },
      {
        path: '/mobile-connect/beautiful-number',
        element: <BeautifulNumbPage />,
        loader: async () => {
          const number = await baseGetRequest(`/numbers`);
          const allArticle = await baseGetRequest('/article/');
          return { allArticle: allArticle, number: number };
        },
      },
      {
        path: '/mobile-connect/tariffs',
        element: <Tariffs />,
        loader: async () => {
          const res = await Api.getTariffs();
          const banner = await Api.getBannerDetail('Тарифы');
          return {
            resData: res.data,
            bannerData: banner.data,
          };
        },
      },
      {
        path: '/conference-call',
        element: <ConferenceCall />,
        loader: async () => {
          const res = await Api.getConferenceCall();
          return res.data;
        },
      },
      {
        path: '/mobile',
        element: <Mobile />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getMobileList(),
            Api.getMobileServicesBanner(),
          ]);
          return {
            data: data.data,
            banner: banner.data,
          };
        },
      },
      {
        path: '/mobile-connect/tariffs/freedom',
        element: <Freedom />,
      },
      {
        path: '/mobile-connect/tariffs/:id',
        element: <International />,
        loader: async ({ params }) => {
          const res = await Api.getTariffs();
          const detail = await Api.getTariffsDetail(params.id);
          return {
            resData: res.data,
            detailData: detail.data,
          };
        },
      },
      {
        path: '/mobile-connect/international-connection',
        element: <InternationalCon />,
        loader: async () => {
          const res = await Api.getInternationalCommunicationDetail(
            '?q=Базовая тарификация',
          );
          const banner = await Api.getBannerParams('Международная связь');
          const favorite =
            await Api.getInternationalCommunicationDetail('?q=Любимая Зона');
          return {
            basic: res.data,
            banner: banner.data,
            favorite: favorite.data,
          };
        },
      },
      {
        path: '/mobile-connect/international-connection/favorite-country/:favoriteId',
        element: <FavoriteCountryPage />,
        loader: async ({ params }) => {
          const detail = await Api.getInternationalCommunicationDetail(
            params.favoriteId,
          );
          const favorite =
            await Api.getInternationalCommunicationDetail('?q=Любимая Зона');
          return { detail: detail.data, favorite: favorite.data };
        },
      },
      {
        path: '/mobile-connect/international-connection/basic-tarification/:basicId',
        element: <BasicTariffingPage />,
        loader: async ({ params }) => {
          const detail = await Api.getInternationalCommunicationDetail(
            params.basicId,
          );
          const basic = await Api.getInternationalCommunicationDetail(
            '?q=Базовая тарификация',
          );
          return { detail: detail.data, basic: basic.data };
        },
      },
      {
        path: '/article/:articleId',
        element: <ArticleComponents />,
        loader: async ({ params }) => {
          const article = await baseGetRequest(`/article/${params.articleId}`);
          const allArticle = await baseGetRequest(`/article/`);
          return { article: article, allArticle: allArticle };
        },
      },
      {
        path: '/mobile-connect/internet-packages',
        element: <InternetPackages />,
        loader: async () => {
          const res = await Api.getInternetPackageList();
          const banner = await Api.getBannerParams('Интернет пакеты');
          return { data: res.data, banner: banner.data };
        },
      },
      {
        path: '/mobile-connect/anti-determinant',
        element: <AntiDeterminant />,
        loader: async () => {
          const res = await Api.getAntiDeterminantList();
          const banner = await Api.getBannerParams('Антиопределитель');
          return { data: res.data, banner: banner.data };
        },
      },
      {
        path: '/mobile-connect/roaming',
        element: <Roaming />,
        loader: async () => {
          const roaming = await baseGetRequest('/roaming/');
          const allArticle = await baseGetRequest('/article/');
          const res = await Api.getRoaming();
          const banner = await Api.getBannerDetail('Роуминг');
          const quest = await Api.getQuestions();
          return {
            roamingData: res.data,
            bannerData: banner.data,
            questData: quest.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/mobile-connect/roaming/roamingServices',
        element: <RoamingServices />,
        loader: async () => {
          const res = await Api.getRoaming();
          return res.data;
        },
      },
      {
        path: `/mobile-connect/roaming/roamingServices/:id`,
        element: <Connection />,
        loader: async ({ params }) => {
          const res = await Api.getRoaming();
          const detail = await Api.getRoamingDetail(params.id);
          return { detailData: detail.data, resData: res.data };
        },
      },
      {
        path: '/mobile-connect/roaming/roamForBusiness',
        element: <RoamingForBusiness />,
        loader: async () => {
          const res = await Api.getRoamingBusiness();
          const countries = await Api.getCountries();
          return {
            resData: res.data,
            countriesData: countries.data,
          };
        },
      },
      {
        path: '/mobile-connect/ott-packages',
        element: <OttPackages />,
        loader: async () => {
          const res = await Api.getOttPackages();
          const banner = await Api.getBannerDetail('Бизнес пакеты интернета');
          return {
            resData: res.data,
            bannerData: banner.data,
          };
        },
      },
      {
        path: '/mobile-connect/ott-packages/:id',
        element: <OttTelegram />,
        loader: async ({ params }) => {
          const res = await Api.getOttPackages();
          const detail = await Api.getOttPackagesDetail(params.id);
          return {
            res: res.data,
            detail: detail.data,
          };
        },
      },
      {
        path: '/mobile-connect/internet-for-m2m-devices',
        element: <M2MPage />,
        loader: async () => {
          const [internetM2MRes, relatedAdvantagesRes, banner, allArticle] =
            await Promise.all([
              Api.getInternetm2mList(),
              Api.getRelatedAdvantagesm2mList(),
              Api.getInternetm2mListBanner(),
              baseGetRequest('/article/'),
            ]);
          return {
            internetM2M: internetM2MRes.data,
            relatedAdvantages: relatedAdvantagesRes.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/mobile-modem/:id',
        element: <Modem />,
        loader: async () => {
          const [internetM2MRes, modem, mobileVpn] = await Promise.all([
            Api.getInternetm2mList(),
            Api.getm2mModem(),
            Api.getm2mMobileVpn(),
          ]);
          return {
            internetM2M: internetM2MRes.data,
            modem: modem.data,
            mobileVpn: mobileVpn.data,
          };
        },
      },
      {
        path: '/mobile-vpn/:id',
        element: <Vpn />,
        loader: async () => {
          const [internetM2MRes, mobileVpn, modem] = await Promise.all([
            Api.getInternetm2mList(),
            Api.getm2mMobileVpn(),
            Api.getm2mModem(),
          ]);
          return {
            internetM2M: internetM2MRes.data,
            mobileVpn: mobileVpn.data,
            modem: modem.data,
          };
        },
      },
      {
        path: '/mobile-connect/tv-mobile-television',
        element: <TelevisionPage />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getMobileTvList(),
            Api.getMobileTvListBanner(),
          ]);
          return {
            data: data.data,
            banner: banner.data,
          };
        },
      },
      {
        path: '/mobile-connect/internet-distribution',
        element: <GiveAwayInternet />,
        loader: async () => {
          const res = await Api.getInternetDistributionList();
          return res.data;
        },
      },
      {
        path: '/office-communication/virtual-pbx-international-connection',
        element: <VirtualPbx />,
        loader: async () => {
          const res = await Api.getOfficeNetworkParams('Вертуальная АТС');
          const banner = await Api.getBannerParams('Виртуальная атс');
          const allArticle = await baseGetRequest(`/article/`);
          return {
            data: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/office-communication',
        element: <OfficePage />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getOfficeList(),
            Api.getOfficeBannerService(),
          ]);
          return {
            data: data.data,
            banner: banner.data,
          };
        },
      },
      {
        path: '/office-communication/fixed-internet-tariffs',
        element: <FixedInternet />,
        loader: async () => {
          const allArticle = await baseGetRequest('/article/');
          const res = await Api.getOfficeNetworkParams(
            'Фиксированный интернет',
          );
          const banner = await Api.getBannerDetail('Фиксированный интернет');
          return {
            res: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/office-communication/short-number',
        element: <ShortNumber />,

        loader: async () => {
          const allArticle = await baseGetRequest('/article/');
          const res = await Api.getOfficeNetworkParams('Короткий номер');
          const banner = await Api.getBannerDetail('Короткий номер');
          return {
            res: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/office-communication/fixed-mobile-convergence',
        element: <FixedMobileCon />,
        loader: async () => {
          const res = await Api.getOfficeNetworkParams('FMC');
          const banner = await Api.getBannerParams('FMC');
          const allArticle = await baseGetRequest(`/article/`);
          return {
            data: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/office-communication/sip-office-telephony-roaming',
        element: <SipTelephony />,
        loader: async () => {
          const res = await Api.getOfficeNetworkParams('SIP Телефония');
          const banner = await Api.getBannerParams('SIP Телефония');
          const allArticle = await baseGetRequest(`/article/`);
          return {
            data: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/products-based-big-data',
        element: <BigData />,
        loader: async () => {
          const banner = await Api.getBannerDetail('BIG DATA');
          const servicesBanner = await Api.getBannerServices('BIG DATA');
          return {
            banner: banner.data,
            servicesBanner: servicesBanner.data,
          };
        },
      },
      {
        path: '/it-security/software-sale',
        element: <SoftwareSales />,
        loader: async () => {
          const res = await Api.getItAndSecurityParams('Продажа ПО');
          const banner = await Api.getBannerParams('Продажа по');
          const allArticle = await baseGetRequest('/article/');
          return {
            data: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/it-security/vpn-mobile-networks-tariffs',
        element: <VpnUnification />,
        loader: async () => {
          const res = await Api.getItAndSecurityParams('VPN-объеденение');
          const banner = await Api.getBannerParams('VPN-объеденение');
          const allArticle = await baseGetRequest('/article/');
          return {
            data: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/itSecurity',
        element: <ItSecurity />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getItAndSecurityList(),
            Api.getItAndSecurityBannerService(),
          ]);
          return {
            data: data.data,
            banner: banner.data,
          };
        },
      },
      {
        path: '/it-security/co-location-international-connection',
        element: <CoLocation />,
        loader: async () => {
          const allArticle = await baseGetRequest('/article/');
          const res = await Api.getItAndSecurityParams('Co Location');
          const banner = await Api.getBannerDetail('Co Location');
          return {
            res: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/bigData-Beetarget',
        element: <BeeTaget />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getBigDataBeetarget(),
            Api.getBeetargetList(),
          ]);
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/bigData/-Financial-market-analytics',
        element: <Analytics />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getBigDataAnalityc(),
            Api.getAnalitycList(),
          ]);
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/bigData-scoring',
        element: <Skorring />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getBigDataSkorring(),
            Api.getSkorringList(),
          ]);
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/it-security/cloud-server-rental-equipment',
        element: <CloudServer />,
        loader: async () => {
          const [data, banner] = await Promise.all([
            Api.getItSecurityCloundServers(),
            Api.getCloundServersList(),
          ]);
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/it-security/video-analytics',
        element: <VideoAnalytics />,
        loader: async () => {
          const allArticle = await baseGetRequest('/article/');
          const res = await Api.getItAndSecurityParams('Видео аналитика');
          const banner = await Api.getBannerDetail('Видео аналитика');
          return {
            res: res.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/bigData-heat-map',
        element: <HeatMap />,
        loader: async () => {
          const data = await Api.getBigDataParams('Тепловая карта');
          const banner = await Api.getBannerParams('Тепловая карта');
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/bigData-custom-analytics',
        element: <CustomAnalytics />,
        loader: async () => {
          const data = await Api.getBigDataParams('Кастомная аналитика');
          const banner = await Api.getBannerParams('Кастомная Аналитика');
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
      },
      {
        path: '/mobile-connect/business-bonus',
        element: <BusinessBonus />,
        loader: async () => {
          const banner = await Api.getBannerParams('БизнесБонусы');
          const services = await Api.getBannerServiceParams('БизнесБонусы');
          return { banner: banner.data, services: services.data };
        },
      },
      {
        path: '/office-communication/call-center-services-equipment',
        element: <CallCenterServices />,
        loader: async () => {
          const data = await Api.getOfficeNetworkParams('Услуги колл-центра');
          const banner = await Api.getBannerParams('Услуги колл-центра');
          const allArticle = await baseGetRequest('/article/');
          return {
            data: data.data,
            banner: banner.data,
            allArticle: allArticle,
          };
        },
        loader: async () => {
          const res = await Api.getItAndSecurityParams('Видео аналитика');
          const banner = await Api.getBannerDetail('Видео аналитика');
          return {
            res: res.data,
            banner: banner.data,
          };
        },
      },
    ],
  },
]);
