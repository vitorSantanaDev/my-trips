import { Title, Wrapper, Description, Logo, Illustration } from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <Wrapper>
    <Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo rosa e 'React Avançado' escrito ao lado."
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/images/hero-illustration.svg"
      alt="Ilustração de um desenvolvedor sentado de frente para uma tela com código."
    />
  </Wrapper>
)

export default Main
