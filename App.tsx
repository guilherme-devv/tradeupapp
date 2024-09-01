import React from 'react';
import CModal from './src/components/modal';
import Loading from './src/components/loading';
import GeralProvider from './src/context';

import Routes from './src/routes/navigation/Routes';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            List?: string;
            SignIn?: string;
            Detail?: string;
        }
    }
}

export default function App() {
    return(
        <GeralProvider>
            <CModal />
            <Loading />
            <Routes />
        </GeralProvider>
    );
};