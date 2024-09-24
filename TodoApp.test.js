import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('TodoApp Component', () => {
  test('renders the header "My To-Do List"', () => {
    render(<TodoApp />);
    const headerElement = screen.getByText(/My To-Do List/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('allows users to add a new todo item', () => {
    render(<TodoApp />);
    
    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'Learn Jenkins' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText(/Learn Jenkins/i);
    expect(todoItem).toBeInTheDocument();
  });

  test('does not add an empty todo item', () => {
    render(<TodoApp />);
    
    const addButton = screen.getByText(/Add/i);

    fireEvent.click(addButton);

    const todoItems = screen.queryAllByRole('listitem');
    expect(todoItems.length).toBe(0);
  });

  test('allows users to delete a todo item', () => {
    render(<TodoApp />);

    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'Learn React' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText(/Learn React/i);
    expect(todoItem).toBeInTheDocument();

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
