export interface IAuth{
    email: string;
    password: string;
    token: string;
    loading: boolean;
}

export interface IList{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IUsers{
    loading: boolean;
    page: number | null;
    total_pages: number | null;
    list: Array<IList>
}

export interface IModal{
    title: string;
    message: string; 
    icon?: string;
    visible: boolean;
    timer: boolean;
}

export interface ILoading{
    visible: boolean;
}

export interface IHookGeral{
    auth: IAuth;
    setAuth: any;
    users: IUsers;
    setUsers: any;
    cModal: IModal;
    setCModal: any;
    cLoading: ILoading;
    setCLoading: any;
}