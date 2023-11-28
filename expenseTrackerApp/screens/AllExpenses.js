import {useContext,useState, useEffect} from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { fetchExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

function AllExpenses(){

    const expensesCtx = useContext(ExpensesContext);

    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
      async function getExpenses(){   
        setIsFetching(true);       
        const expenses = await fetchExpense(); 
        setIsFetching(false); 
        expensesCtx.setExpenses(expenses);    
      }
      getExpenses();

    }, []);

    if(isFetching){
      return <LoadingOverlay/>
    }

    return(
        <ExpensesOutput 
            expenses={expensesCtx.expenses} 
            expensesPeriod="Total"
            fallbackText="No registered expenses found."
            />
    );
}
export default AllExpenses;