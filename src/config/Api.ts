const MainURL = 'http://saq.herokuapp.com/api';

const URL = {
  Login: MainURL + `/api/login`,
  ValidateToken: MainURL + `/validate`,
  exercises: MainURL + `/exercises`,
  workouts: (user_id: number) => MainURL + `\workouts?user_id=${user_id}`,
};

export default URL;
