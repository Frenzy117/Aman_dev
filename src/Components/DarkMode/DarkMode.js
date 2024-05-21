import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './DarkMode.css';

const DarkMode = () =>
{
    const handleDarkMode = (e) =>
    {
        document.body.classList.toggle("dark-theme");
        console.log("Enabled");
    }   
    return (
        <div className='dark-button-container'>
            <button 
            onClick={handleDarkMode}
            className='dark-button'>
            <Brightness7Icon className='brightness-icon'/>
            </button>
        </div>
    );
}

export default DarkMode;