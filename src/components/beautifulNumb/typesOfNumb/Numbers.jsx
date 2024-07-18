import { Example } from './Example';

export const GoldNumber = ({ numbers }) => {
  return <Example status="Золото+" numbers={numbers} />;
};

export const PremiumNumber = ({ numbers }) => {
  return <Example status="Платина" numbers={numbers} />;
};

export const VipNumber = ({ numbers }) => {
  return <Example status="VIP" numbers={numbers} />;
};
