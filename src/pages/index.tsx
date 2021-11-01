import DefaultLayout from 'src/layouts/DefaultLayout'
import styled from 'styled-components'
import { up } from 'utils/twin-media'

const Title = styled.h1`
  color: var(--color-red);

  ${up('--layout-md')} {
    color: var(--color-blue);
    font-size: 50px;
  }
`

const HomePage = () => (
  <DefaultLayout>
    <Title>hello world !</Title>
  </DefaultLayout>
)

export default HomePage
