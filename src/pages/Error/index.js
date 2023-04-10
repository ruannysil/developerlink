import { Container, StyledLink } from "./styles";
import Logo from "../../components/Logo";

export default function Error() {
  return (
    <Container>
      <Logo />
      <h1>Página não encontrada!</h1>
      <p>Está página que está procurando não existe.</p>

      <StyledLink to={"/"}>Voltar para home</StyledLink>
    </Container>
  );
}
