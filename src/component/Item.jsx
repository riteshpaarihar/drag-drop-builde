
import { useDrag } from 'react-dnd';

const Item = ({ type, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`p-2 mb-2 border ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
      {content}
    </div>
  );
};

export default Item;
