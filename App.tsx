import React from 'react';
import CModal from './src/components/modal';
import Loading from './src/components/loading';
import GeralProvider from './src/context';

import Routes from './src/routes/navigation/Routes';
import { IList } from './src/context/typescript';

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            List?: string;
            SignIn?: string;
            Detail?: { costumer: IList };
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