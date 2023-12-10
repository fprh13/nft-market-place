import { Container, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { color } from 'framer-motion';
import Link from 'next/link';

export default function Info() {
  const address = useAddress();

  return (
    <Container maxW={'1200px'} p={5}>
      <Heading> Infomation </Heading>
      <Text>
        <br />
        Technology : Thirdweb, Alchemy, ,Ethers, Next.js, Mumbai, ChakraUI,
        Typescript, MongoDB, Mongoose
        <br />
      </Text>
      <br />
      <Heading> Team </Heading>
      <Text>
        <br />
        Developed by the Jonichan team.
        <br />
        name : 조영무
        <br />
        name : 조니벡
        <br />
        name : 오종찬
        <br />
      </Text>
      <br />
      <Heading> Helped by </Heading>
      <Text>
        <br />
        중부대학교 정보보호학과 이병천 교수님
        <br />
      </Text>
      <br />
      <Heading> GitHub </Heading>
      <Text>
        <br />
        Developed by the Jonathan team.
        <br />
        <br />
        조영무:{' '}
        <Link href={'https://github.com/fprh13'}>
          https://github.com/fprh13
        </Link>
        <br />
        조니벡 :
        <Link href={'https://github.com/jonik2909'}>
          https://github.com/jonik2909
        </Link>
        <br />
        오종찬 :{' '}
        <Link href={'https://github.com/ohjc0928'}>
          https://github.com/ohjc0928
        </Link>
        <br />
      </Text>
      <br />
      <Heading> Demo </Heading>
      <Text>
        <br />
        YouTube for Demo
        <br />
        <Link href={'https://youtu.be/GN_PcZ3IEEY?si=Hujhgt2OcTnAmWUi'}>
          <br />
          https://youtu.be/GN_PcZ3IEEY?si=Hujhgt2OcTnAmWUi
        </Link>
      </Text>
    </Container>
  );
}
