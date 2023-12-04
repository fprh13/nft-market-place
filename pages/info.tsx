import { Container, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

export default function Info() {
  const address = useAddress();

  return (
    <Container maxW={'1200px'} p={5} bg="red.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by JYM. <br />
        deployed by using secret ~ (Account 4) <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : secret ~ <br />
        - NFT_COLLECTION_ADDRESS : secret ~
        <br />
        - TOKEN_DROP_ADDRESS : secret ~ <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  );
}
