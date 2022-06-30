import { Flex, Image } from '@chakra-ui/react';
import { Fragment } from 'react';
import React  from 'react';
import { CardImage, TitleCard } from '../Styled';


const Card = (props) =>{

  const {image, name } = props

   
  return (
    
    <Fragment>

      <CardImage>
      <Flex 
      display={"flex"} 
      justifyContent={"center"} 
      paddingTop='10px' >
  
    <Flex 
    display={'flex'}
    padding='30px'
    gap='5px'
    >  
                 
          
       <Flex display={'flex'} flexDirection={'collumn'}  > 
      <Image margin='20px' padding='0px' boxSize='60px' borderRadius='full' src= {image}/> 
      <TitleCard >{name}</TitleCard>
    <Flex display={'flex'} flexDirection={'collumn'} margin={'10px'} gap="0px" alignItems='center'>
                
              
              </Flex>
            </Flex>
          </Flex>
          </Flex>
           </CardImage>
           </Fragment>
  )

}
export default Card;
