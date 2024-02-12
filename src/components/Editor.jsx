import { useState } from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/monokai.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';



const Container = styled(Box)`
flex-grow: 1;
flex-basic 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
`

const Heading = styled(Box)`
background: white;
display: flex;
padding: 9px 12px;
`
const Header = styled(Box)`
display: flex;
background: white;
color: blue;
justify-content: space-between;
font-weight: '700px';
`




const Editor = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    // const handleClear = () => {
    //     onChange('');
    // }
    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            alignContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2


                        }}
                    >{icon}

                    </Box>
                    {heading}
                </Heading>
                {/* <Button onClick={handleClear} variant="outlined" color="primary">Clear</Button> */}
                {/* <button>clear</button> */}

                <CloseFullscreenIcon
                    onClick={() => {
                        setOpen(prevState => !prevState)
                    }}
                />
            </Header>
            <ControlledEditor
                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}

                options={{
                    theme: 'custom',
                    lineNumbers: true,
                }} />
        </Container>
    )
}
export default Editor