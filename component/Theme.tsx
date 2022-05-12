import { ThemeProvider } from '@mui/material/styles';

import { FC, ReactNode } from 'react';

import { useThemeContext } from '../context/theme/context';
import { theme } from '../utils/theme';

type Props = {
    children?: ReactNode
}

const Theme: FC<Props> = ({children}) => {
    const {state: {darkMode}} = useThemeContext()
    
    return (
        <ThemeProvider theme={theme(darkMode)}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;