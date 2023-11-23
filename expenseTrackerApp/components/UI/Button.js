import {View, Pressable, Text, StyleSheet} from 'react-native';
import { GLobalStyles } from '../../constants/styles';

function Button({children,onPress,mode, style}){
    return (
        <View style={style} >
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={[styles.button, mode ==='flat' && styles.flat]}> 
                    <Text style={[styles.buttonText , mode ==='flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

styles = StyleSheet.create({
    button:{
        borderRadius:4,
        padding:8,
        backgroundColor:GLobalStyles.colors.primary500,
    },
    flat:{
        backgroundColor:'transparent'
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },    
    flatText:{
        color:GLobalStyles.colors.primary200,
    },
    
    pressed:{
        opacity:0.75,
        backgroundColor:GLobalStyles.colors.primary100,
        borderRadius:4
    }

    
})