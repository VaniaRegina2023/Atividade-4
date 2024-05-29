import React, { useState } from 'react';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tarefas</h1>
      <div style={styles.listContainer}>
        {tasks.map((task, index) => (
          <div key={index} style={styles.taskItem}>
            <span style={styles.taskText}>{task}</span>
            <button style={styles.button} onClick={() => handleDeleteTask(index)}>Apagar</button>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicionar nova tarefa"
          style={styles.input}
        />
        <button style={styles.button} onClick={handleAddTask}>Adicionar</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center' as 'center'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    maxHeight: '300px',
    overflowY: 'auto'
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  taskText: {
    flex: '1',
    marginRight: '10px',
    textAlign: 'left'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Tasks;
