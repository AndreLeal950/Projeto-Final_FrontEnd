import React from 'react';
import {Button, Flex} from '@chakra-ui/react';
import { Formik , Field, Form } from 'formik';
import '../components/Cadastro.css'


const Cadastro = () => {

  function onSubmit(values, action){
    console.log('SUBMIT', values);
  } 
  

     return (
       <Flex>
         <Formik 
         onSubmit={onSubmit}
         initialValues={{
           name: '',
           email: '',
         }}
        render={({ values })=>(
           
    
         <Form>
           <Flex   
           display={'flex'}
           flexDir={'column'}
           alignItems={'center'}
          
         
        
         
           >
             <label className='title'>Nome</label>
           <Flex >
             <Field 
             
             className='form'
             name="name" 
             type="text" 
             placeholder='Nome'
            />
            
            </Flex>
             <label className='title' >Email</label>
            <Flex >
             <Field
            
             className='form'
             name="email" 
             type="text" 
             placeholder='email' 
             />
           
             </Flex>
             <label className='title' >Usuário</label>
             <Flex >
             <Field
             
             className='form'
             name="user" 
             type="text" 
             placeholder='Usuário' 
             
             />
            </Flex>
             <label className='title' >Senha</label>
            <Flex >
             <Field
             
             className='form'
             name="password" 
             type="password"
             placeholder='Digite sua senha' 
             />
           </Flex>
           <Button 
           colorScheme='messenger'
           type='submit' 
            className='button'
           >Enviar</Button>
           </Flex>
         </Form>

         )}>
         </Formik>
       </Flex>
    )
  }
 

export default Cadastro;