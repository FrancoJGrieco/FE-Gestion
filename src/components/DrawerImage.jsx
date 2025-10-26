import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BadgeIcon from '@mui/icons-material/Badge';
import InventoryIcon from '@mui/icons-material/Inventory';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function DrawerImage({ name }) {
  if (name === 'Inicio') return <HomeIcon sx={{color: 'white'}}/>
  if (name === 'Ventas') return <ReceiptIcon sx={{color: 'white'}}/>
  if (name === 'Empleados') return <BadgeIcon sx={{color: 'white'}}/>
  if (name === 'Productos') return <InventoryIcon sx={{color: 'white'}}/>
  if (name === 'Roles') return <SupervisedUserCircleIcon sx={{color: 'white'}}/>
  if (name === 'Cuentas') return <PortraitIcon sx={{color: 'white'}}/>
  if (name === 'Turnos') return <AssignmentTurnedInIcon sx={{color: 'white'}}/>
  if (name === 'Tiendas') return <StoreIcon sx={{color: 'white'}}/>
  if (name === 'Configuracion') return <SettingsIcon sx={{color: 'white'}}/>

  if (name === 'Cerrar Sesion') return <LogoutIcon sx={{color: 'white'}}/>
}