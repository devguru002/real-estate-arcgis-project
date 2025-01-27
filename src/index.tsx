import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';

import './styles/globals.css';
import './styles/custom.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';
// import { useNavigate } from "react-router-dom";
// import { BrowserRouter,  } from 'react-router-dom';
import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// export const Auth0ProviderWithNavigate = ({ children }: any) => {
//   const navigate = useNavigate();

//   const domain = 'atlaspro.us.auth0.com';
//   const clientId = 'gsr3SHFQkpxa42M9t3bthJv9gq45qQSD';
//   const redirectUri = window.location.origin + '/callback';

//   const onRedirectCallback = (appState: any) => {
//     navigate(appState?.returnTo || window.location.pathname);
//   };

//   if (!(domain && clientId && redirectUri)) {
//     return null;
//   }

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       authorizationParams={{
//         redirect_uri: redirectUri,
//       }}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Auth0ProviderWithNavigate>
//         <App />
//       </Auth0ProviderWithNavigate>
//     </Provider>
//   </BrowserRouter>
// );
// 

root.render(
  <Provider store={store}>
    <Auth0Provider
      domain={'atlasproai.us.auth0.com'}
      clientId={'20KCLj9G1l6u2tT6nRqjeEFTydZRAOTL'}
      authorizationParams={{
        redirect_uri: window.location.origin + '/callback',
      }}
    //  redirectUri={window.location.origin + '/callback'}
    >
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Auth0Provider>
  </Provider>,
  // document.getElementById('root'),
);