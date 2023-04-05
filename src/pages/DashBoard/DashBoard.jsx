import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import wheat from '../../assets/pictures/wheat.jpg'
import SunPlant from '../../assets/pictures/plantSun.png'
import Thermometer from '../../assets/pictures/Thermometer.png'
import Hygrometer from '../../assets/pictures/Hygrometer.png'
import pH from '../../assets/pictures/pH.png'
import nitro from '../../assets/pictures/N.png'
import Potassium from '../../assets/pictures/K.png'
import Phosphorous from '../../assets/pictures/P.png'


const DashBoard = ({ navigation }) => {

    const [n, setN] = useState(45);
    const [P, setP] = useState(28);
    const [k, setK] = useState(13);
    const [temp, setTemp] = useState(28);
    const [humidity, setHumidity] = useState(80);
    const [acidity, setAcidity] = useState(12);
    const [ndvi, setNDVI] = useState(0.89);
    const [health, setHealth] = useState('Healthy')
 
 
  return (
    <View style={styles.mainContainer}>
        
        <Image source={SunPlant} style={styles.bgImage}/>
        <View style={styles.InnerMain}>
          {/* <Image source = {wheat} style={styles.wheatImage}/> */}
          <View style={styles.text}>
            <Text style={styles.mainText}>Wheat</Text>
            <Text style={styles.paraText}>Wheat is a cereal grain that is one of the most widely cultivated and consumed crops in the world. It is a staple food for millions of people and is used in a variety of products, such as bread, pasta, and breakfast cereals.</Text>
          </View>

        

        </View>
        <View style={styles.party}>
            <View style={styles.dataRow}>
                <Image style = {styles.Icon} source = {Thermometer}></Image>
                <Text style = {styles.dataText}>Temperature</Text>
                <Text style = {styles.currVal}>{temp} C</Text>
                <Text style = {styles.range}>25 - 28C</Text>
            </View>
            <View style={styles.dataRow}>
                <Image style = {styles.Icon} source = {Hygrometer}></Image>
                <Text style = {styles.dataText}>Humidity</Text>
                <Text style = {styles.currVal}>{humidity}%</Text>
                <Text style = {styles.range}>74%</Text>
            </View>
            
            <View style={styles.dataRow}>
                <Image style = {styles.Icon} source = {pH}></Image>
                <Text style = {styles.dataText}>Acidity</Text>
                <Text style = {styles.currVal}>{pH}</Text>
                <Text style = {styles.range}>1211.3</Text>
            </View>
            
            <View style={styles.dataRow}>
                <Image style = {styles.Icon} source = {nitro}></Image>
                <Text style = {styles.dataText}>Nitrogen</Text>
                <Text style = {styles.currVal}>{n}mg/L</Text>
                <Text style = {styles.range}>50mg/L</Text>
            </View>
            
            
            
            <View style={styles.dataRow}>
                <Image style = {styles.Icon} source = {Potassium}></Image>
                <Text style = {styles.dataText}>Potassium</Text>
                <Text style = {styles.currVal}>{k}mg/L</Text>
                <Text style = {styles.range}>25 mg/L</Text>
            </View>
            <View style={styles.dataRow}>
                <Image style = {styles.Icon} source = {Phosphorous}></Image>
                <Text style = {styles.dataText}>Phosphorous</Text>
                <Text style = {styles.currVal}>{P}</Text>
                <Text style = {styles.range}> 13 mg/L</Text>
            </View>
            <View style={styles.health}>
                <View>
                    <Text style={styles.atHome}>NDVI Value - </Text>
                    <Text style={styles.atHomeResult}>{ndvi}</Text>
                </View>
                <View>
                    <Text style={styles.atHome}>Plant Health - </Text>
                    <Text style={styles.atHomeResult}>{health}</Text>
                </View>
            </View>
            
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#8BDED1',
        height: '100%',
        alignItems: 'center',
    },
    atHome: {
        fontSize: 18,
        fontFamily: 'WorkSans-Medium',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%'
    },
    atHomeResult: {
        fontSize: 32,
        fontFamily: 'Worksans-Bold',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%'
    },
    health: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'space-between'
    },
    party: {
        width: '90%',
        marginTop: "5%"
    },
    dataRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
    },
    currVal: {
        color: 'black',
        fontFamily: 'WorkSans-SemiBold'
    },
    dataText: {
        fontSize: 15,
        fontFamily: 'WorkSans-Regular',
        color: 'black'
    },
    range: {
        color: '#0C2F15',
        opacity: 0.6,
        fontFamily: 'Worksans-Bold',
        fontSize: 15
    },
    text: {
        marginTop: '20%',
        backgroundColor: 'white',
        width: '100%',
        marginBottom: '5%'
        
    },
    mainText: {
        fontSize: 32,
        fontFamily: 'WorkSans-SemiBold',
        color: 'black',
        alignSelf: 'flex-start'
    },
    paraText: {
        fontSize: 12,
        fontFamily: 'WorkSans-Light',
        color: 'black'
    },
    wheatImage: {
        width: '50%',
        height: '50%',
        zIndex: 20,
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
    
   
    
   
    
    InnerMain: {
      alignItems: 'center',
      paddingHorizontal: '10%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 15,
    }

})

export default DashBoard