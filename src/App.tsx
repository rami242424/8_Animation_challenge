import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items: center;
  background-color: green;

`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color:red;
  gap: 20px;
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items:center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius : 50px;
  background-color: #00a5ff;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const onClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box>1</Box>
        <Box layoutId="BoxCircle" onClick={onClicked}>
          {clicked ? <Circle /> : null}
        </Box>
        <Box layoutId="BoxCircle" onClick={onClicked}>
          {!clicked ? <Circle /> : null}
        </Box>
        <Box>4</Box>
      </Grid>
      <button style={{ marginTop: '30px' }}>switch</button>
    </Wrapper>
  );
}

export default App;
