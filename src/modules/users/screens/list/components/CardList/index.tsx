import React, { useState, useCallback } from 'react';
import { FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { useGeral } from '../../../../../../context';
import useAPI from '../../../../../../services/api';
import { end } from '../../../../../../assets/constants/endpoints';
import {
  CardContainer,
  DetailContainer,
  Email,
  HideIcon,
  ImgProfile,
  Name,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { IList } from '../../../../../../context/typescript';

const CardList = () => {
  const navigation = useNavigation();
  const { users, setUsers, setCModal } = useGeral();
  const { request } = useAPI();
  
  const [loading, setLoading] = useState(false);

  const handleMore = useCallback(() => {
    if (loading) return; 
    
    const page = users.page ?? 0;
    const total_pages = users.total_pages ?? 0;
    
    if (page < total_pages) {
      setLoading(true);
      
      request(`${end.users(`${page + 1}`)}`, 'GET')
        .then(res => {
          const { page, total_pages, data } = res.data;
          const oldList = users.list;
          setUsers({
            page: page,
            total_pages: total_pages,
            list: oldList.concat(data),
          });
        })
        .catch(e => {
          const err = e?.response?.data?.error || '';
          setCModal({
            title: 'Atenção!',
            message: `Não foi possível obter a lista de usuários. Error:\n${err}`,
            visible: true,
            timer: true,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, users, request, setCModal, setUsers]);

  const renderItem: ListRenderItem<IList> = ({ item }) => {
    return (
      <CardContainer
        onPress={() => navigation.navigate('Detail', { costumer: item })}
      >
        <ImgProfile source={{ uri: item.avatar }} resizeMode="contain" />
        <DetailContainer>
          <Name>
            {item.first_name ?? "Sem nome"} {item.last_name}
          </Name>
          <Email>{item.email ?? "Sem e-mail"}</Email>
        </DetailContainer>
        <HideIcon name='chevron-right' />
      </CardContainer>
    );
  };

  return (
    <>
      <FlatList
        data={users.list}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReached={handleMore}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </>
  );
};

export default CardList;
