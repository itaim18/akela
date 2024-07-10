import { FC, useState } from 'react';
import styles from './styles.module.css';
import { API_STR } from '../../constants/mockData';
import { sleep } from '../../helpers/sleep';
const Create: FC = () => {
  const [error, setError] = useState<any>('');
  const [message, setMessage] = useState<string>('');
  const [taskState, setTaskState] = useState('ready');
  const [taskName, setTaskName] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(`Creating task: ${taskName}, ${taskDescription}, ${taskState}`);
    setTaskDescription('');
    setTaskName('');
    setTaskState('');
    try {
      const res = await fetch(API_STR + 'task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: taskName,
          description: taskDescription,
          status: taskState
        })
      });
      const data = await res.json();
      console.log(data);
      setMessage(data.message);
      await sleep(1500);
      setMessage('');
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.taskForm}>
      <h2>Create Task</h2>
      <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <br />
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select
          id="age-select"
          value={taskState}
          onChange={(event) => {
            console.log(event.target.value);

            setTaskState(event.target.value);
          }}>
          <option value="ready">ready</option>
          <option value="active">active</option>
          <option value="done">done</option>
        </select>
        <button type="submit">Create</button>
      </form>

      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
    </div>
  );
};

export default Create;
