import React, { useEffect, useState} from 'react';
import {Flex} from "@chakra-ui/react";
import { listUserTweet } from '../services/auth';
import { useAuth } from '../context/auth-context';
import CardTweet from './CardTweet';
import { useParams } from 'react-router-dom';

const UserProfile = () => {

     const { user } = useAuth();
    const [userTweet, setUserTweet] = useState([]);
    const {user_id} = useParams();

    useEffect(() => {
        const request = async () => {
          try {
            const response = await listUserTweet(user_id ? user_id : user.id)
            setUserTweet(response.data);
          } catch (error) {
            alert("não foi possível listar os tweets deste usuário!");
          }
    }   
    request();
  }, [user.id, user_id])
 
    return(
          <Flex direction={'column'}>
            {userTweet.map ((element) => <CardTweet body={element.body} createdAt={element.createdAt} 
           user_id={element.user_id} /> )}
          </Flex>
    )
}
export default UserProfile;