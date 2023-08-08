import React from "react";
import {
  Box,
  Title,
  Table,
  createStyles,
  Container,
  Image,
} from "@mantine/core";
import { defaultSize } from "@/core";
import { Message } from "@/core";
import {text_up} from "@/lib/animations"

const useStyles = createStyles((theme) => ({
  container: {
    background: "white",
    borderRadius:"7px",
    position: "relative",
    animation: `${text_up} 0.7s forwards`
  },
  head: {
    borderRadius: "5px",
  },
}));



export const ListNotFound: React.FC = () => {
  
  const { classes } = useStyles();
  return (

    <Container py={15} className={classes.container}>
      <Box mt={30} py={15} bg="red" className={classes.head}>
        <Title order={2} color="white" align="center">
          {Message.echec}
        </Title>
      </Box>
    </Container>
  );
};

export const NoMatricule:React.FC = () => {
  const { classes } = useStyles();
  return (
    <Container py={15} className={classes.container}>
        <Box mt={30} py={15} className={classes.head}>
        <Title order={2} color="dark" align="center">
          {Message.noMatricule}
        </Title>
      </Box>
    </Container>
  );
};

NoMatricule.displayName ="No matricule message"
ListNotFound.displayName = "List du non trouvé"
