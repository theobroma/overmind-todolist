import React from 'react';
// import styled from 'styled-components/macro';
import TodoApp from '../../@components/TodoApp';

// const Thing = styled.div`
//   color: red;
// `;

interface Props {
  // activeTodoCount: number;
  // completedCount: number;
}

const MainApp: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <TodoApp />
        </div>
      </section>
    </div>
  );
};

export default MainApp;
