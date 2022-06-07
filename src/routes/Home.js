
import { Button, Flex, Square, Text } from '@chakra-ui/react'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MenuMobile from "../components/MenuMobile.js";
import '../images/logo_navbar.png'


function Home() {

    const navigate = useNavigate();
    const [user, setUser] = useState();

    const handleLogout = () =>{
        setUser(null);
        navigate('/login');

    }


    return(
        <div>
            <nav>
                <link href='../images/logo_navbar.png'></link>
            </nav>
            
            
        <Square 
        w='360px' 
        minHeight='149px'
        >
            <Flex w='272px' height='90px'>
            <Text>Box 2</Text>
            </Flex>
        </Square>
        <p>Home</p>
        <MenuMobile/>
        <Button 
        colorScheme='blue' 
        onClick={handleLogout}
        padding={'20px'}
        margin='10px'>Sair</Button>
        </div>
    )
}

export default Home;