import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../components/SideBar'
import Todos from '../components/Todos'
function Home() {
    return (
        <>
            <SideBar />
            <Center mt={6} flexDirection={'column'}>
                <Heading  fontFamily={"'PT_Sans', sans-serif"} as='h2' size='2xl'>
                    Todo-List
                </Heading>
                <Todos />
            </Center>
        </>
    )
}

export default Home;