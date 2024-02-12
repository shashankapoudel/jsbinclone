import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import styled from '@mui/material/styled';
// import styled from '@mui/styled-engine-sc';
// import styled from 'styled-components';


// const Container = styled(AppBar)





const Header = () => {
    const logo = 'https://iconape.com/wp-content/png_logo_vector/jsbin-logo.png'
    return (
        <AppBar position='static' sx={{ backgroundColor: 'grey', height: '9vh' }}>
            <Toolbar>




                <img src={logo} style={{ width: 35, margin: '0px 0px 10px -15px' }} />




            </Toolbar>
        </AppBar>
    )
}
export default Header