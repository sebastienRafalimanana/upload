import React from 'react'
import { createStyles, Stack, Image, Title, Input,Button, Grid} from '@mantine/core';
import {MagnifyingGlass} from "@phosphor-icons/react"
import {text_up} from "@/lib/animations"

const useStyles = createStyles((theme) => ({
    banner:{
        position:"relative",
        height:"300px",
        width:"calc(100% + 32px)",
        margin:"-16px -16px",
        padding:' 2.5em 15%',
        boxShadow:`5px 5px 10px ${theme.colors.dark[0]}`,
    },
    background:{
        position:"absolute",
        top:"0px",
        left:"0px",
        zIndex:-1,
        filter:"brightness(0.485)"
    },
   
    content:{
        zIndex:2,
        opacity:0,
        animation: `${text_up} 1s 0.02s forwards`,
    },
    btn_search:{
        height:'50px',
        width:"150px",
        borderRadius:"0px 7px 7px 0px",
        backgroundColor: theme.colors.mint[2],
        transition:"all .3s ease-in-out",
        '&:hover': {
            backgroundColor: theme.colors.mint[5],
            width:"175px"
        },
    }

}))
export const Portal: React.FC = () =>  {
    const { classes } = useStyles();
  return (
    <div className={classes.banner}>
        <Stack className={classes.content}>
           <Title w={135} pl={15} color='white' bg={"blue"}>2023</Title>
           <Title order={2} color='white'>Résultats des examens en cours </Title>
           <Grid gutter={5}>
            <Grid.Col span={10}>
            <Input px={-35} width={"75%"} icon={<MagnifyingGlass weight='bold' color="black" ></MagnifyingGlass>}
                placeholder='Rechercher votre matricule ou nom ou prénom'
                styles={(theme) => ({
                    input: {
                        height:'50px',
                        borderRadius:"7px 0px 0px 7px",
                        border:"none"
                    },
              })}></Input>
            </Grid.Col>
            <Grid.Col span={2}>
              <Button className={classes.btn_search}>Rechercher</Button>
            </Grid.Col>
           </Grid>
        </Stack>
        <Image height={300} className={classes.background} src="/book_bg.png"></Image>
    </div>
  )
}
