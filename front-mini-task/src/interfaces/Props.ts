import type { Task } from "./taskProps";

type ActionCard = {
  onEdit: (task: Task) => void;
  onDelete: (id?: number) => void;
};

export type CardProps = {
  task: Task;
  action: ActionCard;
};

export type CardViewProps = {
  tasks: Task[];
  action: ActionCard;
  onCreate: () => void;
};


export interface Props {
  onNewTask: () => void;
  userName: string;
}