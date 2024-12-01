class Project extends TaskManager {
    private tasks: Set<string> = new Set();
  
    addTask(task: string): void {
      this.tasks.add(task);
    }
  
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  