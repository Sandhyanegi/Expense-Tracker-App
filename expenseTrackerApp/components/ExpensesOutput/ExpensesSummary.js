import {View,Text,StyleSheet} from 'react-native';
import { GLobalStyles } from '../../constants/styles';

function ExpensesSummary({expenses,periodName}){

    //reduce() is js array function
    const expensesSum = expenses.reduce( (sum,expense) =>{
        return sum + expense.amount
    },0);  //starting value of sum is 0

    return(
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text> 
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GLobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    period:{
        fontSize:12,
        color: GLobalStyles.colors.primary400,
    },
    sum:{
        fontSize:14,
        fontWeight:'bold',
        color: GLobalStyles.colors.primary400,
    }
})

