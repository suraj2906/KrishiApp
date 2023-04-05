import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SunCloud from '../../assets/pictures/SunClouds.png'
import SunPlant from '../../assets/pictures/plantSun.png'
import weather from '../../assets/pictures/weather.png'
import Bush from '../../assets/pictures/Bush.png'
import wheat from '../../assets/pictures/wheat.jpg'
import bajra from '../../assets/pictures/bajra.jpg'
import Bell from '../../assets/pictures/Notification.png'
import Therm from '../../assets/pictures/Thermometer.png'
import Hygro from '../../assets/pictures/Hygrometer.png'
import pH from '../../assets/pictures/pH.png'
import Menu from '../../assets/pictures/Menu.png'

const Home = ({ navigation }) => {

    const [cloud, setCloud] = useState('Sunny to Partly Cloudy')
    const [weatherData, setWeatherData] = useState('Clear Skies')
    const [temp, setTemp] = useState(32)
    const [date, setDate] = useState('Thursday, April 6th')
    const [wheatHealth, setWheatHealth] = useState(1)
    const [bajraHealth, setBajraHealth] = useState(0)
    const [wheatTemp, setWheatTemp] = useState(28)
    const [wheatHumidity, setWheatHumidity] = useState(80)
    const [wheatpH, setWheatpH] = useState(12)

 
  return (
    <View style={styles.mainContainer}>
      
        <Image source={SunPlant} style={styles.bgImage}/>
        <View style={styles.NavBar}>
            <TouchableOpacity>
                <Image source={Menu} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Bell} />
            </TouchableOpacity>
        </View>
        <View style={styles.InnerMain}>
         <Text style={styles.mainText}>Hello Abhay,</Text>
         <Image source = {weather} style = {styles.weatherImage}/>
         <View style={styles.row}>
            <View>
                <Text style={styles.wText}>Weather Condition</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.rightText}>
                <Text style={styles.temp}>{temp} C</Text>
                <Text style={styles.normalText}>{weatherData}</Text>
                <Text style={styles.normalText}>{cloud}</Text>
            </View>
         </View>
        <TouchableOpacity onPress = {() => navigation.navigate('DashBoard')}>
        <View style={styles.card} >
            <Image source = {wheat} style = {styles.plantImage}/>
            <View style = {styles.cardContent}>
                <View style={styles.cardData }>
                    <Text style = {styles.CardMainText}>
                        Wheat
                    </Text>
                    <View style={wheatHealth ? styles.healthy : styles.unHealthy}></View>
                </View>
                <View style={styles.cardData }>
                    <View style={styles.dataSmall}>
                        <Image source = {Therm}/>
                        <Text style={styles.dataSmallText}>{wheatTemp} C</Text>
                    </View>
                    <View style={styles.dataSmall}>
                        <Image source = {Hygro}/>
                        <Text style={styles.dataSmallText}>{wheatHumidity}%</Text>
                    </View>
                    <View style={styles.dataSmall}>
                        <Image source = {pH}/>
                        <Text style={styles.dataSmallText}>{wheatpH}</Text>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>

        <View style={styles.card}>
            <Image source = {bajra} style = {styles.plantImage}/>
            <View style = {styles.cardContent}>
                <View style={styles.cardData }>
                    <Text style = {styles.CardMainText}>
                        Bajra
                    </Text>
                    <View style={wheatHealth ? styles.healthy : styles.unHealthy}></View>
                </View>
                <View style={styles.cardData }>
                    <View style={styles.dataSmall}>
                        <Image source = {Therm}/>
                        <Text style={styles.dataSmallText}>{wheatTemp} C</Text>
                    </View>
                    <View style={styles.dataSmall}>
                        <Image source = {Hygro}/>
                        <Text style={styles.dataSmallText}>{wheatHumidity}%</Text>
                    </View>
                    <View style={styles.dataSmall}>
                        <Image source = {pH}/>
                        <Text style={styles.dataSmallText}>{wheatpH}</Text>
                    </View>
                </View>
            </View>
        </View>


        </View>
        
    </View>
  )
}



const styles = StyleSheet.create({
    dataSmall: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '25%',
        
    },
    dataSmallText: {
        color:'#0C2F15',
        opacity: 0.6,
        marginLeft: '4%',
        fontSize: 15
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
        alignSelf: 'center',
        marginTop: '4%'

    },
    plantImage: {
        width: '41%',
        height:'100%',
        borderRadius: 15
    }, 
    cardData: {
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
    },
    
    healthy: {
        backgroundColor: '#07D334',
        width: 20,
        height: 20,
        borderRadius: 100,
        marginTop: '3%'
    },
    cardContent: {
        margin: '3%',
    },
    CardMainText: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 24,
        color: 'black'
    },
    card: {
        backgroundColor: 'white',
        width: 300,
        height: 138,
        borderRadius: 15,
        alignSelf: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '5%'


    },
    temp: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 24,
        color: 'black',
    },
    normalText: {
        fontFamily: 'WorkSans-Regular',
        color: '#0C2F15',
        opacity: 0.4,
        fontSize: 9,
    },
    weatherImage: {
        width: '100%',
        position: 'absolute',
        top: '13%'
    },
    rightText: {
        textAlign: 'right',
        alignItems: 'flex-end'
    },
    wText: {
        fontSize: 15,
        fontFamily: 'WorkSans-Medium',
        color: 'white'
    },
    date: {
        fontSize: 9,
        fontFamily: 'WorkSans-Regular',
        color: 'white'
    },
    mainContainer: {
        backgroundColor: '#8BDED1',
        height: '100%',
        alignItems: 'center',
        
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
    
    mainText: {
      fontFamily: 'Worksans-Black',
      fontSize: 32,
      color: 'black'
    },
    
    InnerMain: {
        width: '90%',
        marginTop: '3%',
    },
    NavBar: {
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
    },

})

export default Home