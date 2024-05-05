import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Shared/Colors'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      {/* <Image source={}  /> */}
      <View style={{backgroudColor:Colors.white,
        padding: 25,
        alignItems:'center',
        marginTop:-50
      }}>
      <Text style={styles.heading}>Your Ultimate Restaurant</Text>
      <Text style={styles.heading}>Appointment Booking App</Text>
      <Text style={{textAlign:'center', marginTop:20,}}>Book Appointment Effortlessly and manager your Restaurant</Text>
      <TouchableOpacity 
      onPress={()=>console.log("Clicked")}
      style={{padding:16,
        backgroundColor:Colors.PRIMARY,
        borderRadius:90,
        alignItems:'center',
        marginTop:20,
        width:Dimensions.get('screen').width*0.8,
      }}>
      <Text style={{fontSize:17, color:Colors.white}}>Login with Google</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    appImage:{
        width:350,
        height:700,
        marginTop:50,

    },
    heading:{
      fontSize: 28,
      fontWeight:'bold'
    }

})