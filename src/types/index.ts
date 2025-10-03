export interface UserData {
  email: string;
  password: string;
  birthdate: {
    month: string;
    day: string;
    year: string;
  };
  ethnicity: string;
  height: {
    feet: string;
    inches: string;
  };
  weight: string;
}

export interface OnboardingData {
  birthdate?: {
    month: string;
    day: string;
    year: string;
  };
  ethnicity?: string;
  height?: {
    feet: string;
    inches: string;
  };
  weight?: string;
}
