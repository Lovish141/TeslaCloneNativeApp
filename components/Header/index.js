import { View, Image} from 'react-native'
import React from 'react'
import styles from './styles'

const index = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
      <Image style={styles.ham} source={require('../../assets/images/menu.png')}/>

    </View>
  )
}

export default index