import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchCycles } from '../controllers/CycleController';
import { firebase } from '../config/firebase';

export default function CycleListScreen() {
  const [cycles, setCycles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const uid = firebase.auth().currentUser.uid;
      const fetchedCycles = await fetchCycles(uid);
      setCycles(fetchedCycles);
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.cycleItem}>
      <Text style={styles.dateText}>Start Date: {item.startDate}</Text>
      <Text style={styles.dateText}>End Date: {item.endDate}</Text>
      <Text style={styles.symptomsText}>Symptoms: {item.symptoms}</Text>
      <Text style={styles.notesText}>Notes: {item.notes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cycles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cycleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
  },
  symptomsText: {
    fontSize: 14,
    color: '#555',
  },
  notesText: {
    fontSize: 14,
    color: '#777',
  },
});
