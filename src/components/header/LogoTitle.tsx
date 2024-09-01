import React from 'react';
import {Image} from 'react-native';

const LogoTitle = () => {
    return(
      <Image
        style={{ width: 60, height: 100, alignSelf: 'center' }}
        source={require('../../assets/images/logotradeup.png')}
      />
    );
};

export default LogoTitle;