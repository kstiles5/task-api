import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

const taskRepo = require('../repositories/taskRepo');

exports.getTaskById = async (id) => {
  return await taskRepo.findTaskById(id);
};
