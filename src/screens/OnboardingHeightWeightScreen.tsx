import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type OnboardingHeightWeightScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnboardingHeightWeight'>;

interface Props {
  navigation: OnboardingHeightWeightScreenNavigationProp;
}

const feet = Array.from({ length: 8 }, (_, i) => (i + 1).toString());
const inches = Array.from({ length: 12 }, (_, i) => i.toString());

export default function OnboardingHeightWeightScreen({ navigation }: Props) {
  const [selectedFeet, setSelectedFeet] = useState('');
  const [selectedInches, setSelectedInches] = useState('');
  const [weight, setWeight] = useState('');

  const handleComplete = () => {
    if (!selectedFeet || !selectedInches || !weight) {
      return;
    }
    
    const weightNum = parseFloat(weight);
    if (weightNum <= 0 || weightNum > 1000) {
      return;
    }
    
    navigation.replace('Home');
  };

  const isCompleteEnabled = selectedFeet && selectedInches && weight;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>What's your height and weight?</Text>
        <Text style={styles.subtitle}>This helps us calculate your body composition and optimize your testosterone levels</Text>

        <View style={styles.heightContainer}>
          <Text style={styles.sectionTitle}>Height</Text>
          <View style={styles.heightPickers}>
            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Feet</Text>
              <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
                {feet.map((foot) => (
                  <TouchableOpacity
                    key={foot}
                    style={[
                      styles.pickerItem,
                      selectedFeet === foot && styles.pickerItemSelected
                    ]}
                    onPress={() => setSelectedFeet(foot)}
                  >
                    <Text style={[
                      styles.pickerItemText,
                      selectedFeet === foot && styles.pickerItemTextSelected
                    ]}>
                      {foot}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Inches</Text>
              <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
                {inches.map((inch) => (
                  <TouchableOpacity
                    key={inch}
                    style={[
                      styles.pickerItem,
                      selectedInches === inch && styles.pickerItemSelected
                    ]}
                    onPress={() => setSelectedInches(inch)}
                  >
                    <Text style={[
                      styles.pickerItemText,
                      selectedInches === inch && styles.pickerItemTextSelected
                    ]}>
                      {inch}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={styles.weightContainer}>
          <Text style={styles.sectionTitle}>Weight</Text>
          <View style={styles.weightInputContainer}>
            <TextInput
              style={styles.weightInput}
              placeholder="Enter weight in lbs"
              placeholderTextColor="#666"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />
            <Text style={styles.weightUnit}>lbs</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.completeButton,
            !isCompleteEnabled && styles.completeButtonDisabled
          ]}
          onPress={handleComplete}
          disabled={!isCompleteEnabled}
        >
          <Text style={[
            styles.completeButtonText,
            !isCompleteEnabled && styles.completeButtonTextDisabled
          ]}>
            Complete Setup
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
  heightContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  heightPickers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pickerColumn: {
    flex: 1,
    marginHorizontal: 10,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  picker: {
    height: 150,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  pickerItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  pickerItemSelected: {
    backgroundColor: '#e94560',
  },
  pickerItemText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 16,
  },
  pickerItemTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  weightContainer: {
    marginBottom: 40,
  },
  weightInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 15,
  },
  weightInput: {
    flex: 1,
    padding: 15,
    color: '#fff',
    fontSize: 16,
  },
  weightUnit: {
    color: '#888',
    fontSize: 16,
    marginLeft: 10,
  },
  completeButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  completeButtonDisabled: {
    backgroundColor: '#333',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeButtonTextDisabled: {
    color: '#666',
  },
});
