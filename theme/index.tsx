// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  components: {
    // Image:{
    //   sizes:{
    //     sm:{
    //       w: '50%',
    //       h:"50%"
    //     }
    //   }
    // },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        md: {
          h: '40px',
          w: "100%",
          fontSize: 'md',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'white' : '#656565',
        }),
        thin:(props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'white' : 'black',
          color: props.colorMode === 'dark' ? 'black' : 'white'
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'teal.500', 
          fontSize: 'md',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
    IconButton:{
        color: {
            black:(props: StyleFunctionProps) => ({
              color: props.colorMode === 'dark' ? 'white' : 'black',
            }),
        }
    }
  },

})

export default theme