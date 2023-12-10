import { Avatar, Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import NextLink from 'next/link';

export function Navbar() {
  const address = useAddress();

  return (
    <Box m={'auto'} py={'8px'} px={'40px'} bg="gray.100">
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <img
            src="/logo.png"
            srcSet="/logo.png"
            style={{ width: '50px', height: '50px' }}
            loading="lazy"
          ></img>
        </Link>

        <Flex
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Flex dir={'row'} alignItems={'center'}>
            <ConnectWallet />
            {address && (
              <Link as={NextLink} href={`/profile/${address}`}>
                {/* <Avatar src="https://bit.ly/broken-link" ml={'20px'} /> */}
              </Link>
            )}
          </Flex>

          <Link as={NextLink} href="/" mx={2.5}>
            <Text color={'grey'}>Buy</Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text color={'grey'}>Sell</Text>
          </Link>
          {/* <Link as={NextLink} href="/tokendrop" mx={2.5}>
            <Text color={'grey'}>Token Drop</Text>
          </Link> */}
          <Link as={NextLink} href="/info" mx={2.5}>
            <Text color={'grey'}>Info</Text>
          </Link>

          <Link href="https://nft-front-ten.vercel.app" mx={2.5}>
            <Text color={'blue'}>gallery&community</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
