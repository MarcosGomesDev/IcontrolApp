import React from 'react';

import Container from '../Core/Container';

import EntryListItem from './EntryListItem';

import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onEntryPress, onPressActionButton, onPressDaysButton}) => {
  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Últimos lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressDaysButton={onPressDaysButton}
      onPressActionButton={onPressActionButton}>
      {entries.map((item, index) => {
        return (
          <EntryListItem
            key={item.id}
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )
      })}
    </Container>
  );
};

export default EntryList;