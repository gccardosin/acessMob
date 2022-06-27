import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppCadastroUser() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
    
    function validasubmit() {
        if (nome === '' || email === '' || login === '' || password === '') {
            alert('Preencha todos os campos!')
            return;
        } else {
            setNome('');
            setEmail('');
            setLogin('');
            setPassword('');
            alert('Cadastro Efetuado com sucesso!');
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../assets/logo.png')} />

                <Text style={styles.title}>Cadastro de Usuário</Text>

                <TextInput placeholder="Nome" value={nome} style={styles.inputs} onChangeText={text => setNome(text)} />

                <TextInput placeholder="E-mail" value={email} style={styles.inputs} onChangeText={text => setEmail(text)} />

                <TextInput placeholder="Login" value={login} style={styles.inputs} onChangeText={text => setLogin(text)} />

                <View style={styles.inputarea}>
                    <TextInput placeholder="Password" value={password} style={styles.inputSenha} onChangeText={text => setPassword(text)} secureTextEntry={hidePass} />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name="eye" color="#000" size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.pergunta}>Quais são os tipos de acessibilidade que você procura?</Text>

                <TouchableOpacity style={styles.cadastrar} onPress={() => validasubmit()}>
                    <Text style={styles.alinhamento}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15
    },
    inputs: {
        width: 350,
        height: 40,
        backgroundColor: '#d9d9d9',
        borderWidth: 3,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
    },
    inputSenha: {
        width: '85%',
        height: 40,
    },
    inputarea: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 40,
        backgroundColor: '#d9d9d9',
        borderWidth: 3,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
    },
    logo: {
        margin: 25,
        width: 300,
        height: 200
    },
    alinhamento: {
        textAlign: 'center',
    },
    cadastrar: {
        width: 200,
        height: 40,
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#d9d9d9'
    },
    pergunta: {
        fontSize: 18,
        width: 350,
        marginTop: 15,
        marginBottom: 10,
        fontWeight: 'bold',
    },
});