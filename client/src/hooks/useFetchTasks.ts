import { useState, useEffect } from 'react';
import { API_STR } from '../constants/mockData';
import { IBoard } from '../interfaces/data.types';
const useFetchTasks = () => {
  const [containers, setContainers] = useState<IBoard[]>([]);
  function transformData(data: any[]): IBoard[] {
    const groupedByStatus: { [key: string]: IBoard } = {};

    data.forEach((item) => {
      const status = item.status;
      const id = item._id;
      if (!groupedByStatus[status]) {
        groupedByStatus[status] = {
          id: id,
          title: status.charAt(0).toUpperCase() + status.slice(1),
          cards: []
        };
      }
      groupedByStatus[status].cards.push({
        id: id,
        title: item.name,
        desc: item.description
      });
    });

    return Object.values(groupedByStatus);
  }
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_STR + 'task');
        const data = await response.json();
        const newData = transformData(data);

        setContainers(newData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return { containers, setContainers };
};

export default useFetchTasks;
