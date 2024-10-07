import  { useState } from 'react';
import { useDrop } from 'react-dnd';

const Canvas = ({ setSelectedElement }) => {

  const [droppedItems, setDroppedItems] = useState([]);

  
  const [, drop] = useDrop(() => ({
    accept: ['TEXT', 'IMAGE', 'BUTTON'],
    drop: (item) => {
      
      setDroppedItems((prevItems) => [...prevItems, { ...item, id: prevItems.length }]);
    },
  }));

  
  const handleElementClick = (item) => {
    setSelectedElement(item);
  };

  return (
    <div ref={drop} className="flex-1 bg-gray-50 h-screen p-4">
      <h3 className="text-xl font-bold mb-4">Canvas</h3>
      <div className="w-full h-full border-2 border-dashed">
        {/* Render all dropped items */}
        {droppedItems.map((item, index) => (
          <div 
            key={index} 
            className="p-4 border my-2 cursor-pointer" 
            onClick={() => handleElementClick(item)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
