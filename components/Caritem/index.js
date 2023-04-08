import React from "react";
import {View,ImageBackground,Text} from 'react-native';
import styles from "./styles";
import StyledButton from '../Styledbutton';


const CarItem=(props)=>{

  const {name,tagline,taglineCTA,image}=props.car;

    return(
    <View style={styles.carContainer}>
     <ImageBackground 
     source={image}
      style={styles.imageBack}/>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}> 
          {tagline}
          {' '}
          <Text style={styles.subtaglinecta}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>

        <StyledButton type='primary' text={'Custom Order'}/>
        <StyledButton type='secondary' text={'Existing Inventory'}/>
        </View>



      </View>
    );


};


export default CarItem;