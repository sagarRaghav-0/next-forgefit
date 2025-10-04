// types/userDetail.ts

export type FitnessGoal = "Muscle Gain" | "Fat Loss" | "Endurance";

export interface UserDetail {
  // Basic Info
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  height: number; // in cm
  currentWeight: number; // in kg

  // Fitness Goal
  goal: FitnessGoal;

  // Target Setup
  targetWeight: number; // in kg

  // Initial Measurements (Optional)
  chest?: number;
  waist?: number;
  biceps_flexed?: number;
  biceps_relexed?: number;
  shoulder?: number;
}
