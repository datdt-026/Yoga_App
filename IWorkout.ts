export interface IShortExercise {
  order: number;
  name: string;
  calo: string;
  time: string;
  rest: string;
}

export interface IExerciseItem {
  id: number;
  exercise_id: number;
  workout_id: number;
  created_at: string;
  updated_at: string;
  calo: string;
  time: string;
  exercise_order: number;
  rest: string;
  exercise: {
    id: number;
    name: string;
    calo_per_hour: string;
    img: string;
    video: string;
    description: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    muscle_part_id: number;
  };
}

export interface IComment {
  id: number;
  workout_id: number;
  customer_id: number;
  content: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface IWorkout {
  id: number;
  user_id: number;
  name: string;
  calo: string;
  time: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  total_set: number;
  muscle_part_id: number;
  exercises: IShortExercise[];
  commentCount: number;
  exercise_items: IExerciseItem[];
  comments: IComment[];
}

export interface IResWorkout {
  success: boolean;
  message: string;
  workouts: IWorkout[];
}
