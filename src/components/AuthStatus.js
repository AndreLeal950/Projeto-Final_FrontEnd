import { useNavigate } from "react-router-dom";
import { Container, Text, Box, Image } from "@chakra-ui/react"
import { useAuth } from "../context/auth-context";
import image from '../image/golden-de-oculos.png'


function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return (
      <Container
        display={"flex"}
        justifyContent={"center"}
        backgroundSize={"cover"}
        margin={"0"}
        top={"0"}
        left={"0"}
         padding={"0"}
      >
               
        <Box
          backgroundImage={image}
          backgroundSize={"cover"}
          width={"360px"}
          height={"262px"}
          padding={"50px"}
          display={"-ms-flexbox"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"} >
            
          <Text
            fontSize="34"
            color='white'
            fontWeight='700'
            fontStyle='bold'
            fontFamily='Sans-Serif'
            textAlign="center"
            marginTop={"20"} >
              Comece agora.<br></br>
              Conecte-se já.
          </Text>
           
          </Box> 
          
      </Container>
    );
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
}

export default AuthStatus;
