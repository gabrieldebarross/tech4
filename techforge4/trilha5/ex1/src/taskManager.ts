abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
  }