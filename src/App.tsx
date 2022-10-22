import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { InfoList } from './components/InfoList';
import { InputBar } from './components/InputBar';
import { Task } from './components/Task';
import { Withoutlist } from './components/WithoutList';

import './global.css'

export interface TaskProps {  
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: uuidv4(),
      title: 'Acesse o ToDo List.',
      isCompleted: true
    },
    {
      id: uuidv4(),
      title: 'Adicione sua primeira tarefa.',
      isCompleted: false
    },
  ]);  

  function handleCreateNewTask(title: string) {
    addToLocalStorage([
      ...taskList,
      {
        id: uuidv4(),
        title: title,
        isCompleted: false
      },
    ])
  }  

  function deleteTask(taskID: string) {
    const tasksWithoutDeleteOne = taskList.filter(task => {
      return task.id !== taskID;
    })

    addToLocalStorage(tasksWithoutDeleteOne);
  }

  function completeTask(taskID: string) {
    const newTasksWithOneCompleted = taskList.map(task => {
      if (task.id === taskID) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    })  

    addToLocalStorage(newTasksWithOneCompleted);
  }

  function addToLocalStorage(tasks: TaskProps[]) {
    localStorage.setItem('task', JSON.stringify(tasks))
    setTaskList(tasks)
  }

  function getFromLocalStorage() {
    const updateTasks = localStorage.getItem('task')

    if (updateTasks) {       
      const tasks = JSON.parse(updateTasks); 
      setTaskList(tasks)
    }
  }

  useEffect(() => {
    getFromLocalStorage();
  }, [])

  const amountTaskCreated = taskList.length;
  const amountTaskCompleted = taskList.filter(task => task.isCompleted).length;

  return (
    <>
      <Header />
      <InputBar handleCreateNewTask={handleCreateNewTask} />
      <InfoList amountTaskCreated={amountTaskCreated} amountTaskCompleted={amountTaskCompleted} />      
      { taskList.length === 0 ? (
        <Withoutlist />
      ) : (
        <Task
          task={taskList} 
          onDeleteTask={deleteTask} 
          onCompleteTask={completeTask}
        />        
      )}    
    </>
  )
}
