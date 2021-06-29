import Sidebar from '../Components/Sidebar/Sidebar';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
}
