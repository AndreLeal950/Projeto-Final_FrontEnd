import { useNavigate } from "react-router-dom";
import {  Text, Image, Flex } from "@chakra-ui/react"
import { useAuth } from "../context/auth-context";
import GoldenMobille from '../image/Golden-Mobille.png';
import GoldenDesktop from '../image/Golden-Desktop.png';
import Symbol from '../image/symbol.png'
 

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return (
         
      <Flex       
          direction={['column', 'row']}
          bgImage={[GoldenMobille , GoldenDesktop]}
          bgRepeat='no-repeat'
          bgSize={'100%'}
          height={"262px"}
          margin={'-15px'}
          padding={"150px"}
          display={"-ms-flexbox"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"} >
           
           <Flex
            display={'flex'}
            flexDirection='row'
            fontSize="30"
            color='white'
            fontWeight='600'
            fontFamily='Sans-Serif'
            textAlign="center"
            justifyContent={'center'}
            w='100%'
            >
          <Text width={"200px"}>
            <Image src={Symbol} w={53} margin='-50px' marginLeft={-10}/>
              Comece agora.
              Conecte-se já.
          </Text>
          </Flex>
           
         
          </Flex>
      
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
