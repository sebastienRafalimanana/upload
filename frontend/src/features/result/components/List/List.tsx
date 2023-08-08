import React from "react";
import {IResult} from "../../types"
import {ListNotFound} from "./ListNotFound"
import {
  Box,
  Title,
  Table,
  createStyles,
  Container,
  Image,
  MediaQuery,
  Text,
  Group
} from "@mantine/core";
import { Message } from "@/core";
import {text_up} from "@/lib/animations"

const useStyles = createStyles((theme) => ({
  container: {
    background: "white",
    borderRadius:"7px",
    position: "relative",
    animation: `${text_up} 1s forwards`,
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

interface ResulProps{
  result:IResult
}

export const List: React.FC<ResulProps> = ({result}) => {
  const { classes } = useStyles();
  if(result?.status == false){
    return(
      <ListNotFound></ListNotFound>
    )
  }
  else if (result?.status){
  return (

    <Container py={15} className={classes.container}>
      <Box mt={30} py={15} bg="green" className={classes.head}>
        <Title order={2} color="white" align="center">
          {Message.congratuation}
        </Title>
      </Box>
      <MediaQuery smallerThan={"sm"} styles={{ display: 'none' }}>
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
              <td>{result.candidateName}</td>
              <td>{result.centerName}</td>
              <td>{result.mention}</td>
              <td>{result.labelOption}</td>
              <td>{result.candidateMatricule}</td>
            </tr>
          </tbody>
        </Table>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Group p={15} > 
            <Box>
              <Text size={18} weight={"bold"}>
                {result.centerName}
              </Text>
              <Text size={18} weight={"bold"}>
                {"Série "+ result.labelOption}
              </Text>
            </Box>
            <Box>
              <Text size={18}>{`(${result.candidateMatricule}) `+result.candidateName}</Text>
            </Box>
          </Group>
          
      </MediaQuery>
      <Image
        fit="contain"
        className={classes.confenti}
        src={"/confeti.gif"}
      ></Image>
    </Container>
  );}
  else{
    <Container py={15} className={classes.container}>
        <Box mt={30} py={15} className={classes.head}>
        <Title order={2} color="dark" align="center">
          {Message.noMatricule}
        </Title>
      </Box>
    </Container>
  }
};

List.displayName ="List resultat"
