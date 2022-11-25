import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FC } from 'react';
import theme from '../theme';
import {
    FaSearch,
    FaList,
    FaHome,
    FaUser
} from 'react-icons/fa';


const footerStyle = {
    bottom:'0',
    width:'100%'
}

const Footer: FC = () => {
    const experience = 10  //仮置き
    return (
      <Box
        bg={useColorModeValue(theme.colors.main, 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        style={{...footerStyle}} 
        pos='absolute'>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={2}
          direction={{ base: 'column', md: 'row' }}
          spacing={2}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}><FaHome size={'2rem'} style={{margin:'0 auto'}} />ホーム</Link>
            <Link href={'#'}><FaUser size={'2rem'} style={{margin:'0 auto'}} />マイページ</Link>
            <Link href={'#'}><FaList size={'2rem'} style={{margin:'0 auto'}} />タスク</Link>
            <Link href={'#'}><FaSearch size={'2rem'} style={{margin:'0 auto'}} />検索</Link>
          </Stack>
          <Text>© 2022 KK. All rights reserved</Text>
        </Container>
      </Box>
    );
  }

export default Footer;
