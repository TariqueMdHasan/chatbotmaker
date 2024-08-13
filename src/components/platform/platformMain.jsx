



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './platformMain.css';
import Sidebar from './sidebar';
import FlowArea from './flowArea';
import Top from './top';

const PlatformMain = () => {
  const { fileId } = useParams(); // Get fileId from URL parameters
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem(`file_${fileId}`);
    if (savedData) {
      setElements(JSON.parse(savedData));
    }
  }, [fileId]);

  const handleAddElement = (element) => {
    setElements((prevElements) => {
      const newElements = [...prevElements, element];
      localStorage.setItem(`file_${fileId}`, JSON.stringify(newElements));
      return newElements;
    });
  };

  const handleDeleteElement = (index) => {
    setElements((prevElements) => {
      const newElements = prevElements.filter((_, i) => i !== index);
      localStorage.setItem(`file_${fileId}`, JSON.stringify(newElements));
      return newElements;
    });
  };

  return (
    <div className="platformMain">
      <Top />
      <div className='platformMain-bottom'>
        <Sidebar onAddElement={handleAddElement} />
        <FlowArea elements={elements} onDelete={handleDeleteElement} />
      </div>
    </div>
  );
};

export default PlatformMain;

