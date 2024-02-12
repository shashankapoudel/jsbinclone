import { Box, styled } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'


const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);


    const srcCode = `
    < html >
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 4000)
        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (
        <Box>
            <iframe
                srcDoc={srcCode}
                title="Output"
                sandbox='allow-scripts'
                width="100%"

            />
        </Box>
    )
}
export default Result