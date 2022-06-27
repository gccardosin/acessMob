import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
export default function AppFavoritos() {
    return (
        <ScrollView>
            <View>
                <Text
                    style={styles.container}>O Centro Estadual de Educação Técnica (CEET) Vasco Coutinho é uma instituição de Educação Profissional criada e mantida pelo Governo do Estado do Espírito Santo, com o objetivo de oferecer Educação Profissional, de acordo com o Sistema de Educação Profissional do Estado, em cumprimento aos objetivos estabelecidos pelo Plano Estadual de Educação Profissional do Estado do Espírito Santo – PEP/ES.
                    A escola foi fundada em 1931 e sua primeira unidade, denominada “Escolas Reunidas Vasco Coutinho”, era localizada à Rua Dom Jorge de Menezes, no bairro da Prainha de Vila Velha.
                    Em 1932 foi iniciada a construção do prédio atual, que ficou pronto um ano depois.
                    escola foi fundada em 1931 e sua primeira unidade, denominada “Escolas Reunidas Vasco Coutinho”, era localizada à Rua Dom Jorge de Menezes, no bairro da Prainha de Vila Velha.
                    Em 1932 foi iniciada a construção do prédio atual, que ficou pronto um ano depois.
                    escola foi fundada em 1931 e sua primeira unidade, denominada “Escolas Reunidas Vasco Coutinho”, era localizada à Rua Dom Jorge de Menezes, no bairro da Prainha de Vila Velha.
                    Em 1932 foi iniciada a construção do prédio atual, que ficou pronto um ano depois. Durante 69 anos a escola funcionou no mesmo local até ser abandonada no ano 2000.
                    Desse ano até 2002 o local abrigou uma secretaria escolar que atendia aos antigos alunos. No final do ano, entretanto, a escola fechou as portas e a antiga administração estadual doou o prédio para a Justiça. Neste período, a escola foi depredada e saqueada e chegou a ser invadida.
                    Em 2003, a escola voltou a pertencer ao Estado, que elaborou um projeto pedagógico e arquitetônico para o colégio. A ordem de serviço para o início da transformação da antiga unidade de ensino em um Centro Técnico foi dada em 21 de abril de 2004. A escola foi, então, reinaugurada em 30 de setembro de 2005 e passou a se chamar “Centro Estadual de Educação Técnica Vasco Coutinho”, sendo a primeira unidade estadual voltada para o ensino profissional.
                    Em dezembro de 2012, conforme Lei Estadual nº 9.971, o Vasco Coutinho foi transferido da SEDU para a SECTTI. A partir deste momento, a SECTTI passou a atuar como órgão gestor do CEET, desempenhando as funções de administrar, assessorar, acompanhar, monitorar e prover condições adequadas ao funcionamento da escola.
                    No ano de 2013, a Escola passou a ofertar cursos de Educação a Distância (EaD) e tornou-se núcleo desta modalidade de ensino na Educação Profissinonal do Estado.
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: '#fff',
        backgroundColor: '#13175F',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    tinyLogo: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',

    }
});