import React from 'react'
import {Search,List} from "@/features"
import { Space,Box, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    main:{
        height:"auto",
        zIndex:11
    }
}))

export const Portal: React.FC = () =>  {
    const { classes } = useStyles();
  return (
    <Box className={classes.main} mb={15}>
    <Search></Search>    
    </Box>
  )
}
