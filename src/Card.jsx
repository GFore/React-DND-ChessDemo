import React, { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  cursor: 'move',
};

export const Card = ({ id, text, moveCard, findCard }) => {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { type: ItemTypes.CARD, id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    },
  }), [id, originalIndex]);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    },
  }));

  const opacity = isDragging ? 0.5 : 1;
  const backgroundColor = isDragging ? 'lightgray' : 'white';
  
  return (
    <div ref={(node) => drag(drop(node))} style={{ ...style, opacity, backgroundColor }}>
      {text}
    </div>
  );
};
