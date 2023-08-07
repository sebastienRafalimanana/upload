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

const useStyles = createStyles((theme) => ({
  container: {
    background: "white",
    borderRadius:"7px",
    position: "relative",
  },
  head: {
    borderRadius: "5px",
  },
  table: {
    borderRadius: "12px",
    background: theme.colors.mint[0],
  },
  confenti: {
    position: "absolute",
    top: 0,
    left:0
  },
}));

export const List: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Container py={15} className={classes.container}>
      <Box mt={30} py={15} bg="green" className={classes.head}>
        <Title order={2} color="white" align="center">
          {Message.congratuation}
        </Title>
      </Box>
      <Table
        my={30}
        verticalSpacing="md"
        withBorder={false}
        className={classes.table}
      >
        <thead>
          <tr>
            <th>Nom et prénom</th>
            <th>Centre</th>
            <th>Mention</th>
            <th>Série</th>
            <th>Numéro matricule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{"Rafalimanana Jean Sébastien"}</td>
            <td>{"Bien"}</td>
            <td>{"Toliara I"}</td>
            <td>{"A1"}</td>
            <td>{"41534"}</td>
          </tr>
          <tr>
            <td>{"Rafalimanana Jean Sébastien"}</td>
            <td>{"Bien"}</td>
            <td>{"Toliara I"}</td>
            <td>{"A1"}</td>
            <td>{"41534"}</td>
          </tr>
        </tbody>
      </Table>
      <Image
        fit="contain"
        className={classes.confenti}
        src={"/confeti.gif"}
      ></Image>
    </Container>
  );
};
