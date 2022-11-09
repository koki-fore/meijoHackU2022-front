import React from 'react'
import { Heading, Input, InputGroup, Text } from '@chakra-ui/react'
import PasswordInput from '../components/PasswordInput'
import { Button } from '@chakra-ui/react'

const SignUp: React.FC = () => {
    return (
        <>
            <Heading>ユーザー登録</Heading>
            <InputGroup>
                <Text>メールアドレス</Text>
                <Input placeholder='aaaa@gmail.com' />
                <Text>パスワード</Text>
                <PasswordInput />
                <Button colorScheme='teal' variant='solid' >
                    サインアップ
                </Button>
            </InputGroup>
        </>
    )
}; export default SignUp;