import React from 'react';
import styled from 'styled-components/macro';

const Thing = styled.div`
  color: red;
`;

interface Props {
  // activeTodoCount: number;
  // completedCount: number;
}

const MainApp: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <Thing>Thing</Thing>
    </div>
  );
};

export default MainApp;
