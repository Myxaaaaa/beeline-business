import { MobileConnection } from '../../../components/sideBar/mobileModal/mobileConnection/MobileConnection';
import {
  About,
  BigData,
  ITSecurity,
  InformationClients,
  OfficeCommunication,
} from '../../../components/sideBar/mobileModal/mobileModalPage/MobileModalPage';

export const getModalContent = (selectedLink, closeModalClick) => {
  switch (selectedLink) {
    case 'mobile':
      return <MobileConnection closeModalClick={closeModalClick} />;
    case 'office':
      return <OfficeCommunication closeModalClick={closeModalClick} />;
    case 'products':
      return <BigData closeModalClick={closeModalClick} />;
    case 'itSecurity':
      return <ITSecurity closeModalClick={closeModalClick} />;
    case 'technology':
      return <CloudTechnologies closeModalClick={closeModalClick} />;
    case 'about':
      return <About closeModalClick={closeModalClick} />;
    case 'information':
      return <InformationClients closeModalClick={closeModalClick} />;
    case 'office':
      return <OfficeCommunication closeModalClick={closeModalClick} />;
    default:
      return null;
  }
};
