import {
  bigData,
  about,
  itSecurity,
  informationClient,
  officeCommunications,
} from '../../../../shared/ui/navigationItemsBase/NavigationItemsBase';
import { NavigationSection } from '../../../../shared/ui/navigationSection/NavigationSection';

const createNavigationSection =
  (title, items) =>({ closeModalClick }) => (
    <NavigationSection
      title={title}
      items={items}
      closeModalClick={closeModalClick}
    />
  );

export const BigData = createNavigationSection(
  'Продукты на основе BIG DATA',
  bigData,
);
export const About = createNavigationSection('О компании', about);
export const ITSecurity = createNavigationSection(
  'IT и безопасность',
  itSecurity,
);
export const InformationClients = createNavigationSection(
  'Информация для клиентов',
  informationClient,
);
export const OfficeCommunication = createNavigationSection(
  'Офисная связь',
  officeCommunications,
);
