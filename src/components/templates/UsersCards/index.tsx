import AddressBlock from 'organisms/AddressBlock';
import CompanyInfoBlock from 'organisms/CompanyInfoBlock';
import UserNameBlock from 'organisms/UserNameBlock';
import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {AppContext} from 'context/App';

const UsersCards: React.FC = () => {
  const {
    stores: {usersStore},
  } = useContext(AppContext);

  useEffect(() => {
    usersStore.getUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={toJS(usersStore.users)}
        renderItem={({item}) => (
          <View style={styles.container}>
            <UserNameBlock
              name={item.name}
              userName={item.username}
              email={item.email}
            />
            <AddressBlock
              street={item.address.street}
              suite={item.address.suite}
              city={item.address.city}
              zipcode={item.address.zipcode}
              phone={item.phone}
              website={item.website}
              title={'Address'}
            />
            <CompanyInfoBlock
              name={item.company.name}
              catchPhrase={item.company.catchPhrase}
              bs={item.company.bs}
              title={'Company'}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default observer(UsersCards);

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    marginVertical: 10,

    backgroundColor: '#FFFFFF',

    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
