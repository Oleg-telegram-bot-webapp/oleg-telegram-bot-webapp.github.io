import React, {useMemo, useState} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles';

import tg from '../telegram/index'

function CustomTheme() {
  let tgColorScheme = tg.colorScheme

  const [MUIcolorScheme, setMUIcolorScheme] = useState(tgColorScheme)

  tg.onEvent(
    'themeChanged',
    () => {
      //tgColorScheme = tg.colorScheme
      // setMUIcolorScheme(tgColorScheme)
      console.log("theme changed")
    }
  )

  const theme = useMemo( () =>
    createTheme({
      typography: {
        allVariants: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        }
      },
      palette: {
        mode: MUIcolorScheme
      }
    }, [MUIcolorScheme])
  )

  return (
    <ThemeProvider theme={theme} />
  )
}

export default CustomTheme()