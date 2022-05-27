import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {

  Container,
  Input,
  FormControl,
  FormLabel,
  FormHelperText, 
  Button
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
      width={"360px"}
      margin={"0px"}
      padding={"0"}
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
          width={"296px"}
          height={"40px"}
          marginTop={"0px"}
          marginBottom={"0px"}
          borderRadius={"4px"}
          border={"2px"}/>
        <FormHelperText>Não compartilharemos seu e-mail.</FormHelperText>
        <FormLabel
          htmlFor='password'
          padding={"0px"}
          marginTop={"40px"}
          >Senha</FormLabel>
        
        <Input id='password' type='password'
          width={"296px"}
          height={"40px"}
          marginBottom={"40px"}
          borderRadius={"4px"}
          border={"2px"}
          />
    
              <Button
              type="submit"
              colorScheme='twitter'
              width={"296px"}
              height={"40px"}
              marginTop={"40px"}
              paddin={"40px"}>
                  Login
            </Button>
         </FormControl>
       
    </Container>
  );
}

export default Login;
