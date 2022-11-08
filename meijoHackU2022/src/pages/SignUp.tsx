import React from 'react'
import { Heading, Input, Text } from '@chakra-ui/react'
import PasswordInput from '../components/PasswordInput'

const SignUp: React.FC = () => {
    return (
        <>
            <Heading>ユーザー登録</Heading>
            <Text>メールアドレス</Text>
            <Input placeholder='aaaa@gmail.com' />
            <Text>パスワード</Text>
            <PasswordInput />
        </>
    )
}; export default SignUp;