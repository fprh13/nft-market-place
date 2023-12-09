import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import NFTGrid from '../components/NFTGrid';
import { NFT_COLLECTION_ADDRESS } from '../const/addresses';
import { useContract, useNFTs } from '@thirdweb-dev/react';

export default function Buy() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxW={'1200px'} p={5}>
      <Heading textAlign={'center'}>Created by this site.</Heading>
      <Text as="b">
        <br></br>
        Contract-address<br></br>0xdAF701948f797b669Edf65711541405fD8308bd5
      </Text>
      <NFTGrid isLoading={isLoading} data={data} emptyText={'No NFTs found'} />
    </Container>
  );
}
