import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items:center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius : 50px;
  background-color: white;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;

const Btn = styled(motion.button)`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [currentBox, setCurrentBox] = useState<string | null>(null);

  return (
    <Wrapper>
      <Grid>
        <Box 
          layoutId="Box1"
          onClick={() => {
            setCurrentBox("Box1")
          }}
          whileHover={{ scale: 1.05 }}
          style={{ transformOrigin: "right bottom" }}
        />

        <Box layoutId="BoxCircle">
          {!clicked ? <Circle /> : null}
        </Box>
        <Box layoutId="BoxCircle">
          {clicked ? <Circle /> : null}
        </Box>

        <Box 
          layoutId="Box4"
          onClick={() => {
            setCurrentBox("Box4")
          }}
          whileHover={{ scale: 1.05 }}
          style={{ transformOrigin: "left top" }}
        />
      </Grid>
      
      <Btn 
        onClick={() => {
          setClicked((prev) => !prev)
          setIsRed((prev) => !prev)
        }}
        initial={{ color: "rgba(255, 0, 0, 1)", scale: 1 }}
        animate={{ 
          color: isRed ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, 1)",
          scale: isRed ? 1.5 : 1 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        
      >
        Switch
      </Btn>

      <AnimatePresence>
        { currentBox && (
            <Overlay 
              onClick={() => setCurrentBox(null)}
              initial={{opacity:0}} 
              animate={{opacity:1}} 
              exit={{opacity:0}}
            >
              <Box layoutId={currentBox} style={{backgroundColor: "white"}}/>
            </Overlay>
          )
        }
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
