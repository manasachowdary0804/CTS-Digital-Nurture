export interface Course {
  id: number;
  name: string;
  instructor: string;
  duration: string;
  credits: number | null;
  enrolled: boolean;
}