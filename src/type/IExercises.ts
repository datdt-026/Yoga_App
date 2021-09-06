export interface IMusclePart {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface IMusclePartExercises {
  id: number;
  exercise_id: number;
  muscle_part_id: number;
  created_at: string;
  updated_at: string;
  muscle_part: {
    id: 8;
    name: 'Biceps';
    description: '<p>Front of upper arms</p>';
    created_at: '2021-07-10T08:52:13.000000Z';
    updated_at: '2021-07-10T08:52:13.000000Z';
    deleted_at: string | null;
  };
}

export interface IExercise {
  id: number;
  name: string;
  calo_per_hour: string;
  img: string;
  video: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  mucsle_part_id: number;
  mucsle_part: string;
  muscle_parts: IMusclePartExercises[];
}

export interface IResExercise {
  success: boolean;
  message: string;
  exercises: IExercise[];
}
