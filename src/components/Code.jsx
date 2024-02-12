import Editor from "./Editor"
import { Box, styled } from '@mui/material'
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"


const Container = styled(Box)`
display: flex;
background-color: white;
height: 66.5vh;
`

const Code = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)
    return (
        <Container>

            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading="CSS"
                icon="*"
                color="blue"
                value={css}
                onChange={setCss}
            />
            <Editor
                heading="JavaScript"

                icon="()"
                color="#FCD000"
                value={js}
                onChange={setJs}
            />
        </Container>
    )
}
export default Code