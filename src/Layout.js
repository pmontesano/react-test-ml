import React from 'react';
import Header from './Header';

const componentWithLayout = PrevComponent => {
  const newComponent = () => (
    <div>
      <Header title="Introducción a React" color="#333"  />
      <PrevComponent />

    </div>
  );

  return newComponent;

};

export default componentWithLayout;
