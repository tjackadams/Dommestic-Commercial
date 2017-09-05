import React from "react";
import Helmet from "react-helmet";

import Loadable from '../../components/MyLoadable';

import AdditionalInformation from "./components/AdditionalInformation";
import Header from "./components/Header";
import Information from "./components/Information";

import Box from "grommet/components/Box";

let Form = Loadable({
  loader: () => import('./components/Form')
})

class Contact extends React.Component {
  render() {
    return (
      <contact>
        <Helmet title="Contact"
        meta={[{name: 'description', content: 'Have a look at the areas Domestic & Commercial Drains Dudley can cover. Blocked Drains in Dudley? Halesowen? Surrounding areas? We have you covered.'}]}
        >   
        </Helmet>
        <Box justify="start" align="center" wrap={true} colorIndex="light-2">
          <Header />
          <Box
            direction="row"
            justify="start"
            align="start"
            wrap={true}
            pad="medium"
            margin="small"
            colorIndex="light-2"
          >
            <AdditionalInformation />

            <Information />         
          </Box>
          <Box
            direction="row"
            justify="center"
            align="center"
            wrap={true}
            pad="medium"
            margin="small"
            colorIndex="light-1"
          >
            <Form />
          </Box>
        </Box>
      </contact>
    );
  }
}

export default Contact;
