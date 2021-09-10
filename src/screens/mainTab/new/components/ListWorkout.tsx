import React from 'react';
import {Alert, FlatList, LayoutAnimation, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../reduxs/store';
import URL from '../../../../config/Api';
import {IResWorkout, IWorkout} from '../../../../../IWorkout';
import ItemWorkout from './ItemWorkout';

interface Props {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const ListWorkout = ({ListHeaderComponent}: Props) => {
  const [workout, setWorkout] = React.useState<IWorkout[]>();
  const [loading, setLoading] = React.useState(true);
  const token = useSelector<RootState, string>(state => state.auth.token);
  const userID = useSelector<RootState, number>(state => state.auth.user_id);
  console.log('token', token);

  React.useEffect(() => {
    if (!token || !userID) return;
  });

  React.useEffect(() => {
    fetch(URL.workouts(userID), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((json: IResWorkout) => {
        console.log('json', json);
        const success = json.success;
        //login failed
        if (!success) {
          Alert.alert('Thong bao', json.message);
          setLoading(false);
          return;
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setWorkout(json.workouts);
        setLoading(false);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <FlatList
      data={workout}
      renderItem={({item, index}) => {
        return <ItemWorkout item={item} />;
      }}
      keyExtractor={(item, index) => item.id.toString()}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ListWorkout;

const styles = StyleSheet.create({});
