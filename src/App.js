import './App.css';
import { ChakraProvider , Divider, HStack, Text} from '@chakra-ui/react';
import {ChevronLeftIcon , ChevronRightIcon} from '@chakra-ui/icons';
import EventCard from './eventcard';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <Text fontSize='3xl' margin='0.7%'>EVENTS</Text>
        <Divider w='80%' margin='0.5%'/>
        <HStack alignItems='center'>
        <ChevronLeftIcon w={12} h={12}/>
        <EventCard/>
        <ChevronRightIcon w={12} h={12} style={{position:'absolute', right:0}}/>
        </HStack>
        <Text fontSize='3xl' margin='0.7%'>WORKSHOPS</Text>
        <Divider w='80%' margin='0.5%'/>
        <HStack alignItems='center'>
        <ChevronLeftIcon w={12} h={12}/>
        <EventCard/>
        <ChevronRightIcon w={12} h={12} style={{position:'absolute', right:0}}/>
        </HStack>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
