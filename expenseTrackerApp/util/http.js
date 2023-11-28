import axios from 'axios';

const Backend_URL = 'https://expensetrackerapp-4b4a1-default-rtdb.firebaseio.com/';

export async function storeExpense(expenseData){
    const response = await axios.post(Backend_URL+'/expenses.json',expenseData);
    const id = response.data.name; //name property holds the auto genereated id by firebase
    return id;
}

export async function fetchExpense(){

   const response =  await axios.get(Backend_URL+'/expenses.json');

   const expenses = [];
//    console.log(response.data);
   for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].data),
            description: response.data[key].description
        };
       expenses.push(expenseObj);
    }
    return expenses;
}

export async function updateExpense(id, expenseData){
   return  axios.put(Backend_URL+ `/expenses/${id}.json`,expenseData);
}

export async function deleteExpense(id){
    return axios.delete(Backend_URL+ `/expenses/${id}.json`);
}