import React from 'react';
import { FlatList } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

import EntrySummaryListItem from './EntrySummaryListItem';

const EntrySummaryList = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <EntrySummaryListItem key={index} entry={item} />
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntrySummaryList;
