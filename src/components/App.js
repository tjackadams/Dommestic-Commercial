import React from 'react';
import Helmet from "react-helmet";

import App from 'grommet/components/App';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default () => (
  <App centered={false}>
    <Helmet 
    titleTemplate="%s | Domestic & Commercial Drain Services - Dudley" 
    meta={[{name: 'keywords', content: 'Domestic, Commercial, Blocked, Drains, Dudley, Cheap, Toilet, Sewers'},
    {name: 'description', content: 'We provide a full professional blocked drains service in Dudley and surrounding areas. Best of all, no VAT charges.'}]}
    />
<Header />
<Main />
<Footer />
  </App>
);
