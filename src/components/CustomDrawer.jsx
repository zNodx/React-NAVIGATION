import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: 85,
          marginTop: 30,
          marginBottom: 30, 
        }}
      >
        <Image
          source={require('../assets/perfil.png')}
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,
          }}
          />
          <Text style={{ color:'#000', fontSize: 17, marginTop: 5}}>
            Bem vindo!  
          </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}