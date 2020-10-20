import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { Button } from 'react-native-elements';
import Tick from '../../assets/Tick.svg';
import Error from '../../assets/Error.svg';

const PictureDetails = (props) => {
  const { route } = props;

  const onLinkPress = async (url) => {
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {route.params.record.images && route.params.record.images.length > 0 ? (
        <Image
          style={{ height: 250, marginTop: 10 }}
          source={{ uri: route.params.record.images[0].baseimageurl }}
          resizeMode="center"
        />
      ) : (
        <View style={styles.noImagefoundContainer}>
          <Text style={styles.noImagefoundText}>NO IMAGE FOUND</Text>
        </View>
      )}
      <View style={styles.spacer1} />
      <Text style={styles.artInfoText}>
        ART INFO{' '}
        {route.params.record.verificationlevel === 0 ? (
          <Error width={20} height={20} color="red" />
        ) : (
          <Tick width={20} height={20} color="green" />
        )}
      </Text>
      <View style={styles.spacer2} />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.contentText}>
          Medium: {route.params.record.medium}
        </Text>
        <View style={styles.spacer3} />
        <Text style={styles.contentText}>
          Division: {route.params.record.division}
        </Text>
        <View style={styles.spacer3} />
        <Text style={styles.contentText}>
          Artist:{' '}
          {route.params.record &&
          route.params.record.people &&
          route.params.record.people.length > 0
            ? route.params.record.people[0]['displayname']
            : ''}
        </Text>
        <View style={styles.spacer2} />
        {route.params.record.provenance && (
          <Text style={styles.artInfoText}>PROVENANCE</Text>
        )}
        <View style={styles.spacer2} />
        <Text style={styles.contentText}>{route.params.record.provenance}</Text>
        <View style={styles.spacer2} />
        <Button
          title="Click for more info."
          onPress={() => onLinkPress(route.params.record.url)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  noImagefoundContainer: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0275D8',
  },
  noImagefoundText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacer1: {
    marginTop: 20,
  },
  artInfoText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacer2: {
    marginTop: 30,
  },
  contentText: {
    fontSize: 18,
  },
  spacer3: {
    marginTop: 5,
  },
});

export default PictureDetails;
