import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IHookGeral, IAuth, IUsers, IModal, ILoading } from './typescript';

const iniAuth: IAuth = {
    email: '',
    password: '',
    token: '',
    loading: false
};

const iniUsers: IUsers = {
    loading: false,
    page: null,
    total_pages: null,
    list: []
};

const iniModal: IModal = {
    title: 'Título',
    message: 'Mensagem',
    icon: 'alert',
    visible: false,
    timer: false
};

const iniLoading: ILoading = {
    visible: false,
};

interface GeralContextType {
    auth: IAuth;
    setAuth: React.Dispatch<React.SetStateAction<IAuth>>;
    users: IUsers;
    setUsers: React.Dispatch<React.SetStateAction<IUsers>>;
    cModal: IModal;
    setCModal: React.Dispatch<React.SetStateAction<IModal>>;
    cLoading: ILoading;
    setCLoading: React.Dispatch<React.SetStateAction<ILoading>>;
}

const GeralContext = createContext<GeralContextType | undefined>(undefined);

interface GeralProviderProps {
    children: ReactNode;
}

const GeralProvider: React.FC<GeralProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<IAuth>(iniAuth);
    const [users, setUsers] = useState<IUsers>(iniUsers);
    const [cModal, setCModal] = useState<IModal>(iniModal);
    const [cLoading, setCLoading] = useState<ILoading>(iniLoading);

    return (
        <GeralContext.Provider value={{
            auth,
            setAuth,
            users,
            setUsers,
            cModal,
            setCModal,
            cLoading,
            setCLoading
        }}>
            {children}
        </GeralContext.Provider>
    );
};

export default GeralProvider;

export const useGeral = (): IHookGeral => {
    const context = useContext(GeralContext);
    if (context === undefined) {
        throw new Error('useGeral must be used within a GeralProvider');
    }
    return context;
};
