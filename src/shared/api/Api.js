import axios from 'axios';
import i18next from 'i18next';

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: baseURL,
});

export const baseGetRequest = async (endpoint) => {
  const res = await api.get(endpoint);
  return res.data;
};

api.interceptors.request.use((config) => {
  const userLang = localStorage.getItem('lng') || 'ru';
  config.headers["Accept-Language"] = userLang;
  return config;
});


export const changeLanguage = lng => {
  i18next.changeLanguage(lng);
  localStorage.setItem('lng', lng);
  window.location.reload();
};

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 404) {
      window.location.href = '/404';
    }
    return Promise.reject(error);
  }
);

export const Api = {
  getArticleNameList: () => api.get('article/'),
  getArticleDetail: (number) => api.get(`article/${number}`),
  getTariffs: () => api.get('tariff/'),
  getTariffsDetail: (id) => api.get(`tariff/${id}`),
  getRoaming: () => api.get('roaming/'),
  getRoamingDetail: (id) => api.get(`roaming/${id}`),
  getRoamingBusiness: () => api.get('roaming_business/'),
  getCountries: () => api.get('country/'),
  getOttPackages: () => api.get('ott_package/'),
  getOttPackagesDetail: (id) => api.get(`ott_package/${id}`),
  getBannerDetail: (params) => api.get(`banner/?q=${params}`),
  getBannerServices: (params) => api.get(`banner_service/?q=${params}`),
  getQuestions: () => api.get('questions/'),
  getOfficeNetworkParams: (params) => api.get(`office-network/?q=${params}`),
  getItAndSecurityParams: (params) => api.get(`it-and-security/?q=${params}`),
  getBigDataParams: (params) => api.get(`big-data/?q=${params}`),
  getConferenceCall: () => api.get('conference_call/'),
  getNumbers: (number) => api.get(`numbers?q=${number}`),
  getInternationalCommunicationList: () => api.get('international_communication/'),
  getInternationalCommunicationDetail: (id) => api.get(`international_communication/${id}`),
  getAntiDeterminantList: () => api.get('anti_determinant/'),
  getInternetPackageList: () => api.get('package/'),
  getOfficeNetworkList: () => api.get('office-network/'),
  getOfficeNetworkParams: (params) => api.get(`office-network/?q=${params}`),
  getItAndSecurityParams: (params) => api.get(`it-and-security/?q=${params}`),
  getBigDataParams: (params) => api.get(`big-data/?q=${params}`),
  getBannerParams: (params) => api.get(`banner/?q=${params}`),
  getBannerServiceParams: (params) => api.get(`banner_service/?q=${params}`),
  getBannerHome: () => api.get('main_page_banner'),
  getInternetm2mList: () => api.get('internet_m2m/'),
  getInternetm2mListBanner: () => api.get('/banner/?q=Интернет M2M'),
  getInternetm2mDateil: (id) => api.get(`internet_m2m/${id}`),
  getInternetDistributionList: () => api.get('internet_distribution/'),
  getMobileTvList: () => api.get('mobile_tv/'),
  getMobileTvListBanner: () => api.get('/banner/?q=Укмуш Тv'),
  getOfficeList: () => api.get('/banner/?q=Офисная связь'),
  getOfficeBannerService: () => api.get('/banner_service/?q=Офисная связь'),
  getItAndSecurityList: () => api.get('/banner/?q=IT и Безопасность'),
  getItAndSecurityBannerService: () => api.get('/banner_service/?q=IT и Безопасность'),
  getRelatedAdvantagesm2mList: () => api.get('related_advantages_m2m/'),
  getRelatedAdvantagesm2mListDateil: (id) => api.get(`related_advantages_m2m/${id}`),
  getBigDataList: () => api.get('big-data/'),
  getBigDataBeetarget: () => api.get(`big-data/?q=Beetarget`),
  getBeetargetList: () => api.get(`/banner/?q=Beetarget`),
  getSkorringList: () => api.get(`/banner/?q=Скорринг`),
  getBigDataSkorring: () => api.get(`big-data/?q=Скорринг`),
  getBigDataAnalityc: () => api.get(`big-data/?q=Аналитика финансового рынка`),
  getAnalitycList: () => api.get(`/banner/?q=Аналитика финансового рынка`),
  getItSecurityCloundServers: () => api.get(`/banner/?q=Аренда облочного сервера`),
  getCloundServersList: () => api.get(`/it-and-security/?q=Аренда облочного сервера`),
  getMobileList: () => api.get('/banner/?q=Моб. связь'),
  getMobileServicesBanner: () => api.get('/banner_service/?q=Моб. связь'),
  getm2mModem: () => api.get('/internet_m2m/?q=Модем'),
  getm2mMobileVpn: () => api.get('/internet_m2m/?q=Мобильный VPN')
};