import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import {GLobalStyles} from './constants/styles';



export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExpensesOverview() {
    return( 
      <BottomTabs.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: GLobalStyles.colors.primary500},
                headerTintColor: 'white',
                tabBarStyle: {backgroundColor: GLobalStyles.colors.primary500},
                tabBarActiveTintColor: GLobalStyles.colors.accent500
              }}
      >
        <BottomTabs.Screen 
          name="RecentExpenses" 
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color,size}) => <Ionicons name="hourglass" size={size} color ={color} />
          }}
          />
        <BottomTabs.Screen 
          name="AllExpenses" 
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All',
            tabBarIcon: ({color,size}) => <Ionicons name="calendar" size={size} color ={color} />
          }} 
          />
      </BottomTabs.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{ headerShown: false }} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

