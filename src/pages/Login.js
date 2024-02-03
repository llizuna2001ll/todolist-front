// Import necessary packages
import React, { useState } from 'react';
import { Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Button, Stack, Center } from "@chakra-ui/react";
import AuthenticationService from '../services/AuthenticationService'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [signInData, setSignInData] = useState({ username: '', password: '' });
    const [signUpData, setSignUpData] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const handleSignInChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        AuthenticationService.authenticate(signInData)
            .then((response) => {
                localStorage.setItem("jwt", response.data.access_token)
                navigate("/");
            })
            .catch((error) => {
                console.error('Error authenticating:', error);
            });
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        AuthenticationService.register(signUpData)
            .then((response) => {
                localStorage.setItem("jwt", response.data.access_token)
                navigate("/");
            })
            .catch((error) => {
                console.error('Error authenticating:', error);
            });
    };

    return (
        <>
            <Box maxW="md" mx="auto" mt={'20vh'} mb={'20vh'} p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
                <Center>
                    <Heading mb={5} fontFamily={"'PT_Sans', sans-serif"} as='h2' size='xl'>
                        Todo-List
                    </Heading>
                </Center>
                <Tabs isFitted variant="enclosed-colored">
                    <TabList mb="1em">
                        <Tab _selected={{ color: "white", bg: "teal.500" }}>Sign In</Tab>
                        <Tab _selected={{ color: "white", bg: "teal.500" }}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <form onSubmit={handleSignInSubmit}>
                                <Stack spacing={4}>
                                    <Input
                                        type="text"
                                        name="username"
                                        value={signInData.username}
                                        onChange={handleSignInChange}
                                        placeholder="Username"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        value={signInData.password}
                                        onChange={handleSignInChange}
                                        placeholder="Password"
                                    />
                                    <Button type="submit" colorScheme="teal">Sign In</Button>
                                </Stack>
                            </form>
                        </TabPanel>
                        <TabPanel>
                            <form onSubmit={handleSignUpSubmit}>
                                <Stack spacing={4}>
                                    <Input
                                        type="text"
                                        name="username"
                                        value={signUpData.username}
                                        onChange={handleSignUpChange}
                                        placeholder="Username"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        value={signUpData.password}
                                        onChange={handleSignUpChange}
                                        placeholder="Password"
                                    />
                                    <Button type="submit" colorScheme="teal">Sign Up</Button>
                                </Stack>
                            </form>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

export default Login;
