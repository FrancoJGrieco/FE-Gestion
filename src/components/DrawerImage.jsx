import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BadgeIcon from '@mui/icons-material/Badge';
import InventoryIcon from '@mui/icons-material/Inventory';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';

export default function DrawerImage({ name }) {
  if (name === 'Inicio') return <HomeIcon />
  if (name === 'Ventas') return <ReceiptIcon />
  if (name === 'Empleados') return <BadgeIcon />
  if (name === 'Productos') return <InventoryIcon />
  if (name === 'Roles') return <SupervisedUserCircleIcon />
  if (name === 'Cuentas') return <PortraitIcon />
  if (name === 'Turnos') return <AssignmentTurnedInIcon />
  if (name === 'Tiendas') return <StoreIcon />
  if (name === 'Configuracion') return <SettingsIcon />
}