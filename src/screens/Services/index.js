import React from "react";
import Helmet from "react-helmet";

import ServicesHeader from './images/services_header.jpg';

import Anchor from 'grommet/components/Anchor';
import Box from "grommet/components/Box";
import Button from 'grommet/components/Button';
import Card from "grommet/components/Card";
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';

const Services = () => {
  return (
    <services>
      <Helmet title="Services"
      meta={[{name: 'description', content: 'Domestic & Commercial Drain Services provide a wide range of services in the Dudley area, from Blocked Drains to Blocked Sewers, we have you covered.'}]}/>
<Hero background={<Image src={ServicesHeader}
  fit='cover'
  full={true} />}
  backgroundColorIndex='dark'
  size='large'>
  <Box direction='row'
    justify='center'
    align='center'
    reverse={true}>
    <Box basis='1/2'
      align='end'
      pad='medium' />
    <Box basis='1/2'
      align='start'
      pad='medium'>
      <Box colorIndex='grey-2-a'>
        <Card heading='Services We Provide'
          description={
            <Paragraph>
              We know that an emergency with your pipes can be a real drain.
              Thats why we provide a wide range of services for both domestic & commercial 
              premises. All services are carried out to a high standard by our professional 
              drains expert.
              </Paragraph>
          }
          link={
<Anchor label='Our Services'
  href='#Services'
  primary={true} />
          } />
      </Box>
    </Box>
  </Box>
</Hero>
      <Box justify='start'
  align='center'
  wrap={true}
  margin='small'
  pad='small'
  colorIndex='light-1'
  id='Services'>
  <Box direction='row'
    justify='center'
    align='center'
    wrap={true}
    margin='none'
    colorIndex='light-1'
    
    >
    
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
      <Button label='Blocked Drains'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Blocked Toilets'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Blocked Urinals'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Blocked Sinks'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Blocked Baths'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Blocked Basins'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Blocked Sewers'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Commercial Drains'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Domestic Drains'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
    <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='Pipe Cleaning'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
        <Box direction='row'
      justify='start'
      align='center'
      wrap={true}
      pad='none'
      margin='small'
      colorIndex='light-1'
      
      >
            <Button label='High Pressure Jetting'
  primary={false}
  secondary={false}
  accent={true}
  plain={false} />
    </Box>
  </Box>
</Box>
<Box
pad={{
  horizontal: 'large'
}}
align='center'
textAlign='center'>
<Paragraph
size='xlarge'
width='large'
>
If a service you require has not been mentioned above, please do not hesitate to contact 
Steve with your enquiry. We are always happy to help. 
Contact details can be found <Anchor path='Contact' label='here'/>.
</Paragraph>
  </Box>
    </services>
  );
};

export default Services;
