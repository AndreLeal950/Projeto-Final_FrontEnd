import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import Logo from '../image/Logo.png';
 import {

  Container,
  Input,
  FormControl,
  FormLabel,
  FormHelperText, 
  Button,
  Text,
  Image
} from "@chakra-ui/react"

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (
    <Container
      width={"350px"}
      margin={"10px"}
      marginLeft={'-80px'}
      padding={"10"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign>
      <FormControl onSubmit={handleSubmit}
        display={"flex"}
        flexDirection={"column"}
        >
        <FormLabel
          htmlFor='email'
          padding={"0px"}
          margin={"0px"}
          display={"flex"}
          alignItems={"center"}>Email</FormLabel>
        <Input id='email' type='email'
          width={"300px"}
          height={"55px"}
          marginTop={"0px"}
          marginBottom={"0px"}
          borderRadius={"4px"}
          border={"2px"}
          placeholder='Email'/>
        <FormLabel
          htmlFor='password'
          padding={"0px"}
          marginTop={"40px"}
          >Senha</FormLabel>
        
        <Input id='password' type='password'
          width={"300px"}
          height={"55px"}
          marginBottom={"40px"}
          borderRadius={"4px"}
          border={"2px"}
          placeholder='Senha'
          />
    
              <Button
              type="submit"
              colorScheme='twitter'
              width={"300px"}
              height={"55px"}
              marginTop={"40px"}
              paddin={"40px"}
              fontSize='18px'>
                  Entrar
            </Button>
                <FormHelperText fontSize={'20'}>Ainda não possui conta?.</FormHelperText>
                <Link to='/Cadastro' ><Text as= 'U' color={'blue'} fontSize={'20'}>Cadastrar-se</Text></Link>
         </FormControl>
        
         <Image src={Logo} display={'flex'} justifyContent={'center'} alignItems={'center'} w={300} padding={'50px'}/>
    </Container>
  );
}

export default Login;
