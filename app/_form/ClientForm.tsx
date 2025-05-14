'use client';

import React, { useState } from 'react';
import Button from '@/component/Button';
import Input from '@/component/Input';

interface Task {
  id: number;
  text: string;
}

const ClientForm = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    if (editId !== null) {
      // Edit existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editId ? { ...task, text: inputValue } : task
        )
      );
      setEditId(null); // Reset edit mode
    } else {
      // Add new task
      const newTask: Task = { id: Date.now(), text: inputValue };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    setInputValue(''); // Clear input field
  };

  const handleEdit = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setInputValue(taskToEdit.text);
      setEditId(id); // Set the task ID to edit mode
    }
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      {/* Form for adding or editing tasks */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <Input
          id="inputField"
          name="inputField"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type task..."
        />
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
          {editId !== null ? 'Update' : 'Submit'}
        </Button>
      </form>

      {/* Render tasks */}
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
          >
            <span>{task.text}</span>
            <div className="flex gap-2">
              {/* Edit Button */}
              <Button
                type="button"
                className="bg-yellow-400 hover:bg-yellow-500 text-white"
                onClick={() => handleEdit(task.id)}
              >
                Edit
              </Button>
              {/* Delete Button */}
              <Button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientForm;