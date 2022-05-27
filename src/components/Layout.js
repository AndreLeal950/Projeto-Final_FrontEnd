import { Link, Outlet } from "react-router-dom";
import { Container } from '@chakra-ui/react'
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    alignItems={"center"}>
      <AuthStatus />
            
          <Link to="/">Home</Link><br></br>
          <Link to="/protected">Protected Page</Link>
       
      <Outlet />
    </Container>
  );
}

export default Layout;
