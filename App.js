import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, StyleSheet, Text, View  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <SubEncabezado/>
      <Cuerpo/>
      <Pie/>
    </View>
  );
}

export const Encabezado=()=>{
  return (
    <View style={styles.conteEn}>
    <Text style={styles.texto}>Linked </Text>
    <Image 
        source={require('./assets/src/linkedin.png')}
        style={styles.imagenLiken}
      />
    </View>
    
  )
}

export const SubEncabezado=()=>{
  return(
    <View>
        <Text style={styles.texto2}>Join a trusted community of a 800M professionals</Text>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.conteCu}>

    </View>
  )
}

export const Pie = () => {
  return (
    <View style={styles.contePie}>
      <Boton 
        texto={'Join now'} 
        accion={() => Alert.alert('Boton de alerta')}
        color={'blue'} 
        textColor={'white'}
        textAlign={'center'} 
      />

      <Boton 
        texto={'Continue with Google'} 
        logo={require('./assets/src/buscar.png')}
        accion={() => Alert.alert('Boton de alerta')}
        color={'transparent'} 
        borderColor={'black'}
        textColor={'black'}
        imageMargin={{ marginRight: 10 }} 
      />

      <Boton 
        texto={'Continue with Facebook'} 
        logo={require('./assets/src/facebook.png')}
        accion={() => Alert.alert('Boton de alerta')}
        color={'transparent'} 
        borderColor={'black'} 
        textColor={'black'}
        imageMargin={{ marginRight: 10 }} 
      />
      <Text style={styles.textoUl}>
        Sign in 
      </Text>
    </View>
  );
}


export const Boton=({texto,logo,accion,color,textColor, borderColor, textAlign, imageMargin})=>{
  return(
    <Pressable
      style={({pressed})=>[{
        backgroundColor: color,
        margin: 10,
        borderColor: borderColor,
      },styles.botones]}
      onPress={accion}
      >
      <Image 
        style={[styles.imagenLiken, imageMargin]} 
        source={logo}
      />
      <Text style={[styles.texto2, { color: textColor, textAlign: textAlign }]}>{texto}</Text>
    </Pressable>
  )
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagenLiken:{
    width: 30,
    height: 30,
    //marginTop: 20
  },
  conteEn: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 150,
  },
  texto2: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center', 
  },
  conteCu: {
    flex: 1.5,
  },
  contePie: {
    flex: 1,
  },
  botones: {
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 45,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
  }, 
  textoUl:{
    color: 'blue',
    fontSize: 20,
    textAlign: 'center'
  }

});
