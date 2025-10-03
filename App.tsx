import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import OnboardingBirthdateScreen from './src/screens/OnboardingBirthdateScreen';
import OnboardingEthnicityScreen from './src/screens/OnboardingEthnicityScreen';
import OnboardingHeightWeightScreen from './src/screens/OnboardingHeightWeightScreen';
import HomeScreen from './src/screens/HomeScreen';

export type RootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
  OnboardingBirthdate: undefined;
  OnboardingEthnicity: undefined;
  OnboardingHeightWeight: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a1a2e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ 
              title: 'BoostUrTest',
              headerShown: false 
            }}
          />
          <Stack.Screen 
            name="CreateAccount" 
            component={CreateAccountScreen}
            options={{ 
              title: 'Create Account',
              headerShown: false 
            }}
          />
          <Stack.Screen 
            name="OnboardingBirthdate" 
            component={OnboardingBirthdateScreen}
            options={{ 
              title: 'Birthdate',
              headerBackTitle: 'Back'
            }}
          />
          <Stack.Screen 
            name="OnboardingEthnicity" 
            component={OnboardingEthnicityScreen}
            options={{ 
              title: 'Ethnicity',
              headerBackTitle: 'Back'
            }}
          />
          <Stack.Screen 
            name="OnboardingHeightWeight" 
            component={OnboardingHeightWeightScreen}
            options={{ 
              title: 'Height & Weight',
              headerBackTitle: 'Back'
            }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'BoostUrTest',
              headerLeft: () => null,
              gestureEnabled: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}