import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './DarkMode.css';

const DarkMode = () =>
{
    return (
        <div className='dark-button'>
            <Brightness7Icon className='brightness-icon'/>
        </div>
    );
}

export default DarkMode;