import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type OnboardingEthnicityScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnboardingEthnicity'>;

interface Props {
  navigation: OnboardingEthnicityScreenNavigationProp;
}

const ethnicities = [
  'Caucasian',
  'African American',
  'Hispanic/Latino',
  'Asian',
  'Native American',
  'Pacific Islander',
  'Mixed Race',
  'Other',
  'Prefer not to say'
];

export default function OnboardingEthnicityScreen({ navigation }: Props) {
  const [selectedEthnicity, setSelectedEthnicity] = useState('');

  const handleNext = () => {
    if (!selectedEthnicity) {
      return;
    }
    
    navigation.navigate('OnboardingHeightWeight');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>What's your ethnicity?</Text>
        <Text style={styles.subtitle}>This information helps us provide more accurate recommendations</Text>

        <View style={styles.optionsContainer}>
          {ethnicities.map((ethnicity) => (
            <TouchableOpacity
              key={ethnicity}
              style={[
                styles.option,
                selectedEthnicity === ethnicity && styles.optionSelected
              ]}
              onPress={() => setSelectedEthnicity(ethnicity)}
            >
              <Text style={[
                styles.optionText,
                selectedEthnicity === ethnicity && styles.optionTextSelected
              ]}>
                {ethnicity}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.nextButton,
            !selectedEthnicity && styles.nextButtonDisabled
          ]}
          onPress={handleNext}
          disabled={!selectedEthnicity}
        >
          <Text style={[
            styles.nextButtonText,
            !selectedEthnicity && styles.nextButtonTextDisabled
          ]}>
            Next
          </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    marginBottom: 40,
  },
  option: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  optionSelected: {
    backgroundColor: '#e94560',
    borderColor: '#e94560',
  },
  optionText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  optionTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#333',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButtonTextDisabled: {
    color: '#666',
  },
});
