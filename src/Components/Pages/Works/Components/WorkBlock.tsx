import React from 'react';
import { WorkData } from '../Works';

interface WorkListProps {
  workList: WorkData[];
  setShowModal: any;
}
const WorkBlock: React.FC<WorkListProps> = ({ workList, setShowModal }) => {
  return (
    <div className="works-list">
      {workList.map((item, index) => (
        <div
          key={index}
          className="works-card"
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => setShowModal(true)}
        >
          <p className="works-card__type">{item.type}</p>
          <h3 className="works-card__title">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default WorkBlock;
