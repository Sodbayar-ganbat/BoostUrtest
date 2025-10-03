import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>Welcome to BoostUrTest!</Text>
        <Text style={styles.welcomeSubtitle}>
          Your testosterone optimization journey starts here
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎯 Testosterone Levels</Text>
          <Text style={styles.cardText}>
            Track and optimize your testosterone levels with personalized recommendations
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>💪 Workout Plans</Text>
          <Text style={styles.cardText}>
            Get custom workout routines designed to boost testosterone naturally
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🍽️ Nutrition Guide</Text>
          <Text style={styles.cardText}>
            Learn which foods and supplements support healthy testosterone production
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>😴 Sleep Optimization</Text>
          <Text style={styles.cardText}>
            Discover sleep strategies that maximize testosterone recovery
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📊 Progress Tracking</Text>
          <Text style={styles.cardText}>
            Monitor your progress with detailed analytics and insights
          </Text>
        </View>

        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
  getStartedButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
