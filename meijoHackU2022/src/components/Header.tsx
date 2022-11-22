import {
    Box,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import avatar from '../assets/react.svg'
import theme from '../theme'


const headerStyle = {
    display:'flex',
    height:'3.375rem'
}
const Header: FC = () => {
    const experience = 10  
    return (
        <Box bgColor={theme.colors.main} style={{...headerStyle}} >
            <img src={avatar} />
            <Text pl={1} fontSize='4xl'>
                Lv.{experience}
            </Text>
        </Box>
    );
}

export default Header;
