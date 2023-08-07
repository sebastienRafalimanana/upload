import { AppShell, Header, Footer,Divider,Group,Text,Stack, Box,em,createStyles,Center,Image,Flex} from '@mantine/core'
import {IcOutlineFacebook} from "@/components"
import React from 'react'
import { Header as HeaderPortal } from '@/components'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
    link:{
        textDecoration:"none",
        color:"white",
        '&:hover': {
            color: theme.colors.dark[0],
            textDecoration:"underline"
        },
    }
}))
export const Root: React.FC = () => {
    const { classes } = useStyles();
    return (
        <AppShell
            padding="md"
            header={
                <Header height={100} px="5%" py="xs">
                    <HeaderPortal></HeaderPortal>
                </Header>
            }
            footer={
                <Footer height={150} bg="cadet">
                    <Stack h={"100%"} justify='space-between'>
                        <Flex px="5%" h={"100%"}  align='center' justify="space-between">
                            <Center>
                                <Image height={80} src={"/uf_toliara.png"}></Image>
                            </Center>
                            <Group h={40}>
                                <Text weight={"bold"} color='white' size={em(18)}>FAQ</Text>
                                <IcOutlineFacebook color='white' fontSize={20}></IcOutlineFacebook>
                            </Group>
                        </Flex>
                        <Box>
                        <Divider color='dark'></Divider>
                        <Group px="5%" py={"xs"} position='apart'>
                            <Text size={em(12)} color='white'>Copyright © 2023, 
                                <Link className={classes.link} to="https://torolalana.gov.mg/mg/">Torolalana.gov.mg</Link> - Powered by 
                                <Link className={classes.link} to="https://digital.gov.mg/"> Unité de Gouvernance Digitale</Link>
                            </Text>
                            <Text size={em(12)} color="white"><Link className={classes.link} to="https://digital.gov.mg/a-propos/">Infos complémentaires</Link></Text>
                        </Group>
                        </Box>
                    </Stack>
                </Footer>
            }
        >
            <Outlet />
        </AppShell>
    )
}

Root.displayName = 'Root page'
