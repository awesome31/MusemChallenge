import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PictureItem = ({
  title,
  primaryImageUrl,
  displayName,
  culture,
  onCardPress,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onCardPress}>
      <Text style={styles.titleText}>{title}</Text>
      {primaryImageUrl === '' ? (
        <View style={styles.noImagefoundContainer}>
          <Text style={styles.noImagefoundText}>NO IMAGE FOUND</Text>
        </View>
      ) : (
        <Image
          source={{ uri: primaryImageUrl }}
          style={{ height: 150, width: 120 }}
        />
      )}
      <View style={styles.spacer1} />

      <Text style={styles.bottomText}>{displayName}</Text>
      <Text style={styles.bottomText}>({culture})</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 400,
    width: '45%',
    backgroundColor: '#0275D8',
    alignItems: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    height: 130,
    fontWeight: 'bold',
    margin: 4,
  },
  spacer1: {
    height: 40,
  },
  bottomText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  noImagefoundContainer: {
    height: 150,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noImagefoundText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PictureItem;
