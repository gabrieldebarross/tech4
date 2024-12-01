"use strict";
class Project extends TaskManager {
    constructor() {
        super(...arguments);
        this.tasks = new Set();
    }
    addTask(task) {
        this.tasks.add(task);
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
