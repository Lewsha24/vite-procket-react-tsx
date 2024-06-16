import { useState } from 'react'
import {Group, Button, MantineProvider, createTheme} from '@mantine/core';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Main.css'

export function Main() {
  const [count, setCount] = useState(0)

    const theme = createTheme({
        colors: {
            'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
            'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        }
    });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <MantineProvider
              theme={theme}
          >
              <Group>
                  <Button color="ocean-blue" onClick={() => setCount((count) => count + 1)}>Ocean blue button</Button>
                  <Button color="bright-pink" variant="filled">
                      count {count}
                  </Button>

              </Group>
          </MantineProvider>
      </div>
    </>
  )
}
// Лучше не делдать аткие функции
// Так как я могу дать любое название этой функции при импорте


// export default Button