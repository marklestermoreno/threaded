import React, { useState, ReactNode } from 'react';
import style from './Tooltip.module.css'

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = useState<boolean>(false);

  // Handle mouse hover to show and hide the tooltip
  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div
      className={style['tooltip-container']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && <div className={style.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
