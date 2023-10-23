import React from "react";
import logo from './landing.jpg';
import { VStack, Image, Text, HStack, Button, Divider, Flex} from '@chakra-ui/react';
import { CalendarIcon, TimeIcon, SearchIcon } from '@chakra-ui/icons';
export default function Eventcard(){
    return(
        <VStack margin='2%' padding='2%' maxWidth='60%' bg='#710579' border='1px solid white' borderRadius='15px' _hover={{
            transform: "scale(1.01)"
          }}>
            <Text fontSize='3xl' as='b'>Code Currents</Text>
            <Text fontSize='xl' as='cite'>The online coding event of Currents</Text>
            <HStack>
                <Image src={logo} className="App-logo" alt="logo" borderRadius='7%' style={{maxWidth: "400px",maxHeight: "280px",}}/>
                <VStack>
                <Text>It is an online coding contest of currents. The students will be given a problem where they need to code the solution for that problem within provided time. The Participants are individuals.</Text>
                <Divider/>
                <Flex>
                <HStack>
                    <CalendarIcon style={{ fontSize: "28x" }} />
                    <Text whiteSpace={"pre-wrap"}>
                      date
                    </Text>
                  </HStack>
                  <HStack>
                    <TimeIcon style={{ fontSize: "28x" }} />
                    <Text >time</Text>
                  </HStack>
                  <HStack>
                    <SearchIcon style={{ fontSize: "28x" }} />
                    <Text >location</Text>
                  </HStack>
                  </Flex>
               <Button bg='#EF4D84' color='white'>Register</Button>
                </VStack>
            </HStack>
        </VStack>
    )
}