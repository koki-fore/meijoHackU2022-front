import {
    Box,
    Text,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { FC } from 'react';
import theme from '../theme'
import { 
    BsFillPersonFill,
 } from 'react-icons/Bs';
import {
    FaSearch,
    FaList,
    FaHome
} from 'react-icons/Fa';


const Footer: FC = () => {
    const experience = 10  
    return (
        <Box bgColor={theme.colors.main} >
            <Grid  templateColumns='repeat(8, 1fr)'>
                <GridItem colSpan={2}><FaHome size={'2rem'} style={{margin:'0 auto'}} />ホーム</GridItem>
                <GridItem colSpan={2}><BsFillPersonFill size={'2rem'} style={{margin:'0 auto'}} />マイページ</GridItem>
                <GridItem colSpan={2}><FaList size={'2rem'} style={{margin:'0 auto'}} />タスク</GridItem>
                <GridItem colSpan={2}><FaSearch size={'2rem'} style={{margin:'0 auto'}} />検索</GridItem>
            </Grid>
        </Box>
    );
}

export default Footer;
