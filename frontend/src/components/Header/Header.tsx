import React from 'react'
import { Group,Flex,Text,Divider, em } from '@mantine/core'
import { Center,Image } from '@mantine/core'
import {BrandicoFacebook} from "@/components"


export const Header: React.FC = () => {
  return (
    <Flex  align='center' justify="space-between">
      <Center>
        <Image height={80} src={"/logo_mesupres.png"}></Image>
      </Center>
      <Group h={40}>
        <Text weight={"bold"} size={em(18)}>FAQ</Text>
        <Divider orientation="vertical" />
        <BrandicoFacebook color='blue' fontSize={20}></BrandicoFacebook>
      </Group>
    </Flex>
  )
}

Header.displayName="Header"
