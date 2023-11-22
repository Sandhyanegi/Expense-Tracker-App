import {View,StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GLobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2023-01-19')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-09-13')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 14.99,
        date: new Date('2023-11-19')
    },
    {
        id: 'e5',
        description: 'Groceries',
        amount: 15.99,
        date: new Date('2023-04-23')
    }
];

function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}  />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );

}
export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GLobalStyles.colors.primary700,
    }
})