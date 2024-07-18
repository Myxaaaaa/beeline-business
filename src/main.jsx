import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store/store';
import { Suspense } from 'react';
import { Preloader } from './components/preloader/Preloader';
import { App } from './app';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </ReduxProvider>,
);
