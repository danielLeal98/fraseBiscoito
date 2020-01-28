/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class Botao extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao:{
                width: 50,
                height: 50,
                borderWidth: 2,
                backgroundColor: 'transparent',
                borderColor: props.color,
                borderRadius: 25,
                paddingBottom:50
                   
            },
            botaoArea:{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            botaoText:{
                color: props.color,
                fontSize: 14,
                fontWeight: 'bold'                
            }
        });
    }
    render(){
        return(
          <TouchableOpacity style = {this.styles.Botao} onPress={this.props.onPress}> 
              <View style={this.styles.botaoArea}>
                  <Text style={this.styles.botaoText}>
                      {this.props.text}
                  </Text>
              </View>
          </TouchableOpacity>  
        );
    }
}
export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {texto: ''};
        this.frases = ['Enfrente os problemas e leve a melhor!', 'Dê mais atenção ao que você tem de bom na sua vida',
        'Para chegar ao topo, o que importa é começar!','De nada adianta ter sonhos, se você não se empenhar em correr atrás',
        'Preste atenção nas oportunidades que estão à sua frente!','Positividade para começar o dia é colocar a sua fé em prática.',
        'Não deixe nada nem ninguém estragar o seu bom humor.','A sua irritação não solucionará problema algum. O seu mau humor não modifica a vida. Não estrague o seu dia.',
        'Ontem já passou, é hora de planejar o futuro.','Você pode não ter o melhor do mundo, mas tem muito pelo que agradecer!'];    
        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito(){
        let s = this.state;        
        let r = Math.floor(Math.random() * this.frases.length);        
        s.texto = this.frases[r];        
        this.setState(s);
    }

    render(){
        return (
            <View style={styles.body}>            
                <Image source={require('./images/cookie2.png')} style={styles.imagem} />
                <Text style={styles.textoFrase}>{this.state.texto}</Text>
                <Botao color="rgb(252, 171, 64)" text="Quebrar biscoito" onPress={this.quebrarBiscoito}/>                                
            </View>
        );
    }
};

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'red'
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'        
    },
    textoFrase:{
        fontSize:18,
        color:'rgb(252, 171, 64)',
        margin: 10,        
        fontStyle: 'italic',
        textAlign: 'center'        
    },
    imagem:{        
        marginTop:310,
        height: 200
    }    
});