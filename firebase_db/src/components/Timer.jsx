import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [timerData, setTimerData] = useState({
    timer: 0,
    timeOption: 0,
    isRunning: false,
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Your initial setup logic goes here

    // For demonstration purposes, initializing tasks with some sample data
    setTasks(['Task 1', 'Task 2', 'Task 3']);
  }, []);

  const updateTime = () => {
    // Logic to update time goes here
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleStartTimer = () => {
    setTimerData((prevData) => ({
      ...prevData,
      isRunning: !prevData.isRunning,
    }));
  };

  const handleResetTimer = () => {
    setTimerData({
      timer: 0,
      timeOption: 0,
      isRunning: false,
    });
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [...prevTasks, '']);
  };

  const handleTaskChange = (taskNum, value) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[taskNum] = value;
      return newTasks;
    });
  };

  const handleDeleteTask = (taskNum) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskNum));
  };

  return (
    <div id="container">
      <div>
        <button onClick={handleStartTimer}>
          {timerData.isRunning ? 'Pause Timer' : 'Start Timer'}
        </button>
        <button onClick={handleResetTimer}>Reset Timer</button>
      </div>
      <div>
        {tasks.map((taskText, taskNum) => (
          <div key={taskNum}>
            <input
              type="text"
              placeholder="Enter a task..."
              value={taskText}
              onChange={(e) => handleTaskChange(taskNum, e.target.value)}
            />
            <button onClick={() => handleDeleteTask(taskNum)}>X</button>
          </div>
        ))}
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TimerComponent;
