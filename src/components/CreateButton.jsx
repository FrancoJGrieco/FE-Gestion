import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function CreateButton({ type }) {
  return (
    <Container
      sx={{
        width: 'fit-content',
        height: 'fit-content',
        margin: 0,
        marginTop: 0,
        padding: 0
      }}
    >
      <Button
        component={Link}
        to={`/${type}/create`}
      >
        Create
      </Button>
    </Container>
  )
}