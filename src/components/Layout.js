import { Link, Outlet } from "react-router-dom";
import { Container, Text } from '@chakra-ui/react'
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <Container
      w={'100'}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <AuthStatus />
            
          
          <Link to="/protected"><Text 
          padding={'20px'}
          fontSize='36'
          marginRight={'300px'}
          marginTop={'50px'}
          marginBottom={'-20px'}
          fontWeight={'600'}
          textAlign={'left'}>Login</Text></Link>
       
      <Outlet />
    </Container>
  );
}

export default Layout;
