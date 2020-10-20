import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import PictureItem from '../components/PictureItem';
import { getRecords } from '../store/actions';

const PictureList = (props) => {
  const { records, getRecordsAction, navigation } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecordsAction(setLoading);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="black"
          style={{ position: 'absolute', zIndex: 1 }}
        />
      )}
      <FlatList
        data={records}
        numColumns={2}
        ListHeaderComponent={<View style={{ marginTop: 10 }} />}
        renderItem={(item) => (
          <PictureItem
            key={item.item.id}
            title={item.item.title}
            onCardPress={() =>
              navigation.navigate('PictureDetails', {
                record: item.item,
              })
            }
            primaryImageUrl={
              item.item.images && item.item.images.length > 0
                ? item.item.images[0].baseimageurl
                : ''
            }
            displayName={
              item.item && item.item.people && item.item.people.length > 0
                ? item.item.people[0]['displayname']
                : ''
            }
            culture={
              item.item && item.item.people && item.item.people.length > 0
                ? item.item.people[0]['culture']
                : ''
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 40,
  },
});

const mapStateToProps = (state) => ({
  records: state.records,
});

export default connect(mapStateToProps, { getRecordsAction: getRecords })(
  PictureList
);
