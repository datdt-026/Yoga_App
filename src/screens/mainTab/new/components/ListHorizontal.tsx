import React from 'react';
import {
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {Text, View, Colors, Card} from 'react-native-ui-lib';
import {IExercise, IResExercise} from '../../../../type/IExercises';
import URL from '../../../../config/Api';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../reduxs/store';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ItemList = ({item}: {item: IExercise}) => {
  return (
    <Card
      style={styles.container}
      onPress={() => console.log('press on a card')}>
      <Card.Section
        imageSource={{uri: item.img}}
        imageStyle={{height: 190, width: 190}}
      />
      <View paddingL-16 paddingR-6 marginB-11>
        <Text m15 marginT-10 numberOfLines={1}>
          {item.name}
        </Text>
        <Text b13 dark70>
          Calo {item.calo_per_hour}/hour
        </Text>
      </View>
      <View absT bg-white marginT-10 marginL-10 br100 paddingH-8 paddingV-2>
        <Text h8 dark70>
          1 WEEK
        </Text>
      </View>
    </Card>
  );
};

const ListHorizontal = () => {
  const [exercises, setExercise] = React.useState<IExercise[]>();
  const [loading, setLoading] = React.useState(true);
  const token = useSelector<RootState, string>(state => state.auth.token);
  React.useEffect(() => {
    if (!token) return;
  });

  React.useEffect(() => {
    fetch(URL.exercises, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((json: IResExercise) => {
        console.log('json', json);
        const success = json.success;
        //login failed
        if (!success) {
          Alert.alert('Thong bao', json.message);
          setLoading(false);
          return;
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExercise(json.exercises);
        setLoading(false);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View paddingV-12>
      <View row spread paddingH-16 centerV>
        <Text h24>Exercises For Beginners </Text>
        <Text h15 dark70>
          More
        </Text>
      </View>
      {loading ? (
        <View row paddingH-16 paddingV-12>
          <Card
            style={[
              styles.container,
              {height: 210, backgroundColor: Colors.dark40},
            ]}
            onPress={() => console.log('press on a card')}
          />
          <Card
            style={[
              styles.container,
              {height: 210, backgroundColor: Colors.dark40},
            ]}
            onPress={() => console.log('press on a card')}
          />
          <Card
            style={[
              styles.container,
              {height: 210, backgroundColor: Colors.dark40},
            ]}
            onPress={() => console.log('press on a card')}
          />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={exercises}
          keyExtractor={item => item.id.toString()}
          style={{paddingHorizontal: 16, paddingVertical: 12}}
          renderItem={({item, index}) => {
            return <ItemList item={item} />;
          }}
        />
      )}

      <View paddingH-16 centerV>
        <Text h24>Workout </Text>
      </View>
    </View>
  );
};

export default ListHorizontal;

const styles = StyleSheet.create({
  container: {
    width: 190,
    marginRight: 12,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
