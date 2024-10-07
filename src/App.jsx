import  { useState } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './component/Sidebar';
import Canvas from './component/Canvas';
import ElementProperties from './component/ElementProperties';

const App = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Sidebar />
        <Canvas setSelectedElement={setSelectedElement} />
        {selectedElement && <ElementProperties selectedElement={selectedElement} setSelectedElement={setSelectedElement} />}
      </div>
    </DndProvider>
  );
};

export default App;
