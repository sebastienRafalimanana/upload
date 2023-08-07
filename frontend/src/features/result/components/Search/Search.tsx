import React from 'react'
import { createStyles, Stack, Image, Title, Input,Button, Grid, Box} from '@mantine/core';
import {MagnifyingGlass} from "@phosphor-icons/react"
import {text_up} from "@/lib/animations"
import { useState } from 'react';
import {List as ResultList} from "@/features"


const useStyles = createStyles((theme) => ({
    banner:{
        position:"relative",
        height:"300px",
        width:"calc(100% + 32px)",
        margin:"-16px -16px",
        padding:' 2.5em 10%',
        boxShadow:`5px 5px 10px ${theme.colors.dark[0]}`,
        zIndex:111
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
        width:"100%",
        borderRadius:"0px 7px 7px 0px",
        backgroundColor: theme.colors.mint[2],
        transition:"all .3s ease-in-out",
        '&:hover': {
            backgroundColor: theme.colors.mint[5],
            width:"175px"
        },
    },
    input_search:{
        width:"100%"
    }

}))


export const Search: React.FC = () =>  {

    const { classes } = useStyles();
    const [result,setResult] = useState(false)
    const [getInput, setInput] = useState(""||String)
    const handleSearch = ()=>{
        console.log(getInput);
        setResult(true)

    }
    
  return (
    <>
    <Box className={classes.banner}>
        <Stack className={classes.content}>
           <Title w={135} pl={15} color='white' bg={"blue"}>2023</Title>
           <Title order={2} color='white'>Résultats des examens en cours </Title>
           <Grid gutter={5}>
            <Grid.Col span={8}>
            <Input px={-35} className={classes.input_search}
            onChange={(event)=>{setInput(event.target.value)}}
            icon={<MagnifyingGlass weight='bold' color="black" ></MagnifyingGlass>}
                placeholder='Rechercher votre matricule ou nom ou prénom'
                styles={(theme) => ({
                    input: {
                        height:'50px',
                        borderRadius:"7px 0px 0px 7px",
                        border:"none"
                    },
              })}></Input>
            </Grid.Col>
            <Grid.Col span={'content'}>
              <Button className={classes.btn_search} onClick={handleSearch}>Rechercher</Button>
            </Grid.Col>
           </Grid>
        </Stack>
        <Image height={300} className={classes.background} src="/book_bg.png"></Image>
    </Box>
    {result && <ResultList></ResultList>}
    </>
  )
}
