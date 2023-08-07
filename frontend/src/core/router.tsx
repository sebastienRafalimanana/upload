import { Root,Portal } from '@/routes'
import path from 'path'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
        {
            path: '/resultat',
            element: <Portal />,
        }
        ],
        errorElement:<Root />
    },

])
