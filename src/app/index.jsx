import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routing';
import { Preloader } from '../components/preloader/Preloader';
import i18next from 'i18next';
import '../i18n';

export const App = () => {
  useEffect(() => {
    const lng = localStorage.getItem('lng');
    if (!lng) {
      localStorage.setItem('lng', 'ru');
      i18next.changeLanguage('ru');
    } else {
      i18next.changeLanguage(lng);
    }
  }, []);

  return <RouterProvider router={router} fallbackElement={<Preloader />} />;
};
