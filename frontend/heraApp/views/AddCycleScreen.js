import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { handleAddCycle } from '../controllers/CycleController';
import { firebase } from '../config/firebase';

export default function AddCycleScreen({ navigation }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');

  const addCycle = async () => {
    const uid = firebase.auth().currentUser.uid;
    const cycle = { uid, startDate, endDate, symptoms, notes };
    await handleAddCycle(cycle);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Start Date</Text>
      <TextInput style={styles.input} value={startDate} onChangeText={setStartDate} />

      <Text style={styles.label}>End Date</Text>
      <TextInput style={styles.input} value={endDate} onChangeText={setEndDate} />

      <Text style={styles.label}>Symptoms</Text>
      <TextInput style={styles.input} value={symptoms} onChangeText={setSymptoms} />

      <Text style={styles.label}>Notes</Text>
      <TextInput style={styles.input} value={notes} onChangeText={setNotes} />

      <Button title="Add Cycle" onPress={addCycle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});
