import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { ItemTypes } from './Constants';
import { knightImage } from './knightImage';

const knightStyle = (dragging) => (
  {
    fontSize: 40,
    fontWeight: 'bold',
    cursor: 'move',
    opacity: dragging ? 0.5 : 1,
  }
);

export const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage}/>
      <div ref={drag} style={knightStyle(isDragging)}>
        ♘
      </div>
    </>
  );
};
