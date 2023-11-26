import React, { useEffect, useState, useCallback } from 'react';

const TimerComponent = () => {
  const [timerData, setTimerData] = useState({
    timer: 0,
    timeOption: 0,
    isRunning: false,
  });

  const [tasks, setTasks] = useState([]);
  const [formattedTime, setFormattedTime] = useState('00:00');

  const updateTime = useCallback(() => {
    setTimerData((prevData) => {
      if (prevData.isRunning && prevData.timer > 0) {
        const newTimer = prevData.timer - 1;
  
        // Format the timer value into minutes and seconds
        const minutes = Math.floor(newTimer / 60);
        const seconds = newTimer % 60;
        setFormattedTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  
        if (newTimer === 0) {
          alert('Timer is up!');
          return {
            ...prevData,
            isRunning: false,
          };
        }
  
        return {
          ...prevData,
          timer: newTimer,
        };
      }
  
      return prevData;
    });
  }, []);
  

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  const handleStartTimer = () => {
    setTimerData((prevData) => ({
      ...prevData,
      isRunning: !prevData.isRunning,
    }));
  };

  const handleResetTimer = () => {
    setTimerData({
      timer: 25 * 60,
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
    <div className="container">
      <div>
        <button onClick={handleStartTimer}>
          {timerData.isRunning ? 'Pause Timer' : 'Start Timer'}
        </button>
        <button onClick={handleResetTimer}>Reset Timer</button>
        <div id="time">{formattedTime}</div>
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
