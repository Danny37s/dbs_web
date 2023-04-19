"use client";
import {
  Box,
  Flex,
  FormControl,
  Heading,
  InputGroup,
  InputLeftElement,
  Stack,
  chakra,
  Input,
  InputRightElement,
  Button,
  FormHelperText,
  Link,
  Icon,
  Text,
  FormLabel,
  Checkbox,
  Center,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC, useState } from "react";
import { FaUserAlt, FaLock, FaUserCircle } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const LoginPage: FC = () => {
  const [hydrated, setHydrated] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  React.useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);
  return hydrated ? (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
            <Box flexDirection={"row"} display={"flex"} gap={"4px"}>
              <Text>Dont have an account?</Text>

              <Link color="blue.500" as={NextLink} href="./signup">
                <Text cursor={"pointer"} color="blue.500">
                  Sign Up
                </Text>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  ):<></>;
};

export default LoginPage;
