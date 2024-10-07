
import Item from './Item';

const Sidebar = () => {
  const items = [
    { id: 1, type: 'TEXT', content: 'Text' },
    { id: 2, type: 'IMAGE', content: 'Image' },
    { id: 3, type: 'BUTTON', content: 'Button' },
  ];

  return (
    <div className="w-1/4 p-4 bg-gray-100 h-screen">
      <h3 className="text-xl font-bold mb-4">Drag Elements</h3>
      {items.map(item => (
        <Item key={item.id} type={item.type} content={item.content} />
      ))}
    </div>
  );
};

export default Sidebar;
