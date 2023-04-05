import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { ReactPropTypes,  useState } from 'react'
import SunCloud from '../../assets/pictures/SunClouds.png'
import SunPlant from '../../assets/pictures/plantSun.png'
import Bush from '../../assets/pictures/Bush.png'
import React from 'react'
import { Svg } from 'react-native-svg'

const Language = ({navigation}) => {


    [eng, setEng] = useState(0);
    [hindi, setHindi] = useState(0);
    [tamil, setTamil] = useState(0);
    [telugu, setTelugu] = useState(0);

    const engFunc = () => {
        setEng(1);
        setHindi(0);
        setTamil(0);
        setTelugu(0);
    }
    const hindiFunc = () => {
        setEng(0);
        setHindi(1);
        setTamil(0);
        setTelugu(0);
    }
    const tamilFunc = () => {
        setEng(0);
        setHindi(0);
        setTamil(1);
        setTelugu(0);
    }
    const teluguFunc = () => {
        setEng(0);
        setHindi(0);
        setTamil(0);
        setTelugu(1);
    }

  return (
    <View style={styles.mainContainer}>
    <Image source={SunCloud}/>
    <Image source={SunPlant} style={styles.bgImage}/>
    <View style={styles.InnerMain}>
     <Text style={styles.subText}>Choose Language</Text>
     <View style={styles.LangMain}>
        <View style={styles.LangSub}>
            <TouchableOpacity onPress={engFunc} style={eng ? styles.LangButtonActive : styles.LangButton }>
                    <Text style={eng ? styles.LangTextActive : styles.LangText}>Aa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hindiFunc} style={hindi ? styles.LangButtonActive :  styles.LangButton}>
                    <Text style={hindi ? styles.LangTextActive : styles.LangText}>अ</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.LangSub}>
            <TouchableOpacity onPress={tamilFunc} style={tamil ? styles.LangButtonActive : styles.LangButton}>
                    <Text style={tamil ? styles.LangTextActive : styles.LangText}>அ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={teluguFunc} style={telugu ? styles.LangButtonActive : styles.LangButton}>
                    <Text style={telugu ? styles.LangTextActive : styles.LangText}>అ</Text>
            </TouchableOpacity>
        </View>

     </View>
     <TouchableOpacity style={styles.NextButton} onPress = {() => {navigation.navigate('Onboarding');}}>
        <Text style={styles.NextButtonText}>
            NEXT
        </Text>
     </TouchableOpacity>
    </View>
    <Image source={Bush}  style={styles.BushImage}/>
</View>
  )
}


export default Language

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#8BDED1',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    bgImage: {
      position: "absolute",
      height: "50%",
      width: "100%",
      opacity: 0.1,
      zIndex: -10,
      left: "45%",
      top: '35%',
    },
    BushImage: {
      width: '100%'
    },
   
    subText: {
      fontSize: 24,
      color: 'black',
      fontFamily: 'WorkSans-SemiBold'

    },
    InnerMain: {
    },
    LangButton: {
        backgroundColor: '#FEF9EF',
        opacity: 0.4,
        borderRadius: 15,
        width: 140,
        height: 135,
        textAlign: 'center',
        margin: 10,
        
    },
    LangText: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 72,
        color: 'black',
        alignSelf: 'center'

        
    },
    LangTextActive: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 72,
        color: '#229D3D',
        alignSelf: 'center'

        
    },
    LangSub: {
        display: 'flex',
        flexDirection: 'row'
    },
    LangButtonActive: {
        backgroundColor: '#FEF9EF',
        borderRadius: 15,
        width: 140,
        height: 135,
        textAlign: 'center',
        margin: 10,
    },
    NextButton: {
        borderRadius: 25,
        backgroundColor: '#229D3D',
        width: 140,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        margin: 10,
    },
    NextButtonText: {
        fontSize: 18,
        fontFamily: 'WorkSans-Medium'
    }

})
