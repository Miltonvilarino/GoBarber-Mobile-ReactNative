import React from 'react';
import {Image} from 'react-native';

import logo from '../../assets/logo.png';

import {Background} from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-adress"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu E-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua Senha Secreta"
          />
          <SubmitButton onPress={() => navigation.goBack()}>
            Voltar
          </SubmitButton>
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar Conta Gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
