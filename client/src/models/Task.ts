export enum TaskState {
  READY,
  ACTIVE,
  DONE
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  state: TaskState;
}
