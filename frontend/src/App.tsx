import { Provider } from 'react-redux'
import { MantineProvider,Loader } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import theme from './core/theme/theme'
import { useState, useEffect } from 'react'

import { store } from '@/lib'
import { router } from '@/core'


function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
      }, []);
    

    return (
        <Provider store={store}>
            <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
                {loading ? 
                ( <Loader />) : 
                (<RouterProvider router={router} />)}
            </MantineProvider>
        </Provider>
    )
}

export default App
