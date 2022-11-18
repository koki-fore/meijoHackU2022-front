import {
    Box,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import avatar from '../assets/react.svg'
import theme from '../theme'


const Header: FC = () => {
    const experience = 10  
    return (
        <Box bgColor={theme.colors.brand.main} style={{display:'flex'}} >
            <img src={avatar} />
            <Text pl={1} fontSize='3xl'>
                Lv.{experience}
            </Text>
        </Box>
    );
}

export default Header;
