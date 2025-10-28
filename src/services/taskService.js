import * as taskRepo from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepo.findAll();
}

export async function createTask(newTask) {
  return taskRepo.create(newTask);
}

export async function getTaskById(id) {
  return taskRepo.findTaskById(id);
}