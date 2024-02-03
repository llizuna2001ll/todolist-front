import React, { useState, useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Box, Select, Text } from '@chakra-ui/react'
import TodoService from '../services/TodosServiceApi';

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        TodoService.getAllTodos()
          .then((response) => {
            setTodos(response.data);
            console.log('Todos:', response.data);
          })
          .catch((error) => {
            console.error('Error fetching todos:', error);
          });
      }, []);

    return (
        <>
            <Tabs w={'60%'} mt={10} variant='soft-rounded' colorScheme='blue'>
                <Center>
                    <TabList>
                        <Tab mr={8}>Work</Tab>
                        <Tab>Gaming</Tab>
                    </TabList>
                </Center>
                <TabPanels >
                    <TabPanel >
                        <Box mb={5} border={'1px solid black'} borderRadius={'20px'} bg='tomato' p={4} background={'white'} color='black'>
                            <Center display={'flex'} justifyContent={'space-between'}>
                                <Text fontFamily={"'PT_Sans', sans-serif"} fontSize={'xl'} w={'70%'}>Todo 1</Text>
                                <Select w={'20%'} placeholder='Select option'>
                                    <option value='option1'>TODO</option>
                                    <option value='option2'>ONGOING</option>
                                    <option value='option3'>DONE</option>
                                </Select>
                            </Center>
                        </Box>
                        
                        <Box mb={5} border={'1px solid black'} borderRadius={'20px'} bg='tomato' p={4} background={'white'} color='black'>
                            <Center display={'flex'} justifyContent={'space-between'}>
                                <Text fontSize={'xl'} w={'70%'}>Todo 1</Text>
                                <Select w={'20%'} placeholder='Select option'>
                                    <option value='option1'>TODO</option>
                                    <option value='option2'>ONGOING</option>
                                    <option value='option3'>DONE</option>
                                </Select>
                            </Center>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box mb={5} border={'1px solid black'} borderRadius={'20px'} bg='tomato' p={4} background={'white'} color='black' display={'flex'} justifyContent={'space-between'}>
                            <Text style={{ marginTop: '5px' }} fontSize={'xl'} w={'70%'}>Todo 1</Text>
                            <Select w={'20%'} placeholder='Select option'>
                                <option value='option1'>TODO</option>
                                <option value='option2'>ONGOING</option>
                                <option value='option3'>DONE</option>
                            </Select>
                        </Box>
                        <Box border={'1px solid black'} borderRadius={'20px'} bg='tomato' p={4} background={'white'} color='black' display={'flex'} justifyContent={'space-between'}>
                            <Text style={{ marginTop: '5px' }} fontSize={'xl'} w={'70%'}>Todo 1</Text>
                            <Select w={'20%'} placeholder='Select option'>
                                <option value='option1'>TODO</option>
                                <option value='option2'>ONGOING</option>
                                <option value='option3'>DONE</option>
                            </Select>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Todos