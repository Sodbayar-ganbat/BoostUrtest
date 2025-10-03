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

type OnboardingBirthdateScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OnboardingBirthdate'>;

interface Props {
  navigation: OnboardingBirthdateScreenNavigationProp;
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

export default function OnboardingBirthdateScreen({ navigation }: Props) {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleNext = () => {
    if (!selectedMonth || !selectedDay || !selectedYear) {
      return;
    }
    
    // Validate date
    const day = parseInt(selectedDay);
    const month = months.indexOf(selectedMonth);
    const year = parseInt(selectedYear);
    
    const date = new Date(year, month, day);
    if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
      return;
    }
    
    // Check if user is at least 18
    const age = currentYear - year;
    if (age < 18) {
      return;
    }
    
    navigation.navigate('OnboardingEthnicity');
  };

  const isNextEnabled = selectedMonth && selectedDay && selectedYear;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>What's your birthdate?</Text>
        <Text style={styles.subtitle}>This helps us personalize your testosterone optimization plan</Text>

        <View style={styles.pickerContainer}>
          <View style={styles.pickerColumn}>
            <Text style={styles.pickerLabel}>Month</Text>
            <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
              {months.map((month) => (
                <TouchableOpacity
                  key={month}
                  style={[
                    styles.pickerItem,
                    selectedMonth === month && styles.pickerItemSelected
                  ]}
                  onPress={() => setSelectedMonth(month)}
                >
                  <Text style={[
                    styles.pickerItemText,
                    selectedMonth === month && styles.pickerItemTextSelected
                  ]}>
                    {month}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.pickerColumn}>
            <Text style={styles.pickerLabel}>Day</Text>
            <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
              {days.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.pickerItem,
                    selectedDay === day && styles.pickerItemSelected
                  ]}
                  onPress={() => setSelectedDay(day)}
                >
                  <Text style={[
                    styles.pickerItemText,
                    selectedDay === day && styles.pickerItemTextSelected
                  ]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.pickerColumn}>
            <Text style={styles.pickerLabel}>Year</Text>
            <ScrollView style={styles.picker} showsVerticalScrollIndicator={false}>
              {years.map((year) => (
                <TouchableOpacity
                  key={year}
                  style={[
                    styles.pickerItem,
                    selectedYear === year && styles.pickerItemSelected
                  ]}
                  onPress={() => setSelectedYear(year)}
                >
                  <Text style={[
                    styles.pickerItemText,
                    selectedYear === year && styles.pickerItemTextSelected
                  ]}>
                    {year}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.nextButton,
            !isNextEnabled && styles.nextButtonDisabled
          ]}
          onPress={handleNext}
          disabled={!isNextEnabled}
        >
          <Text style={[
            styles.nextButtonText,
            !isNextEnabled && styles.nextButtonTextDisabled
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
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  pickerColumn: {
    flex: 1,
    marginHorizontal: 5,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  picker: {
    height: 200,
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  pickerItem: {
    padding: 15,
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
