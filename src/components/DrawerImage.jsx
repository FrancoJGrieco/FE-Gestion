import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BadgeIcon from '@mui/icons-material/Badge';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function DrawerImage({ name }) {
  if (name === 'Inicio') return <HomeIcon />
  if (name === 'Ventas') return <ReceiptIcon />
  if (name === 'Empleados') return <BadgeIcon />
  if (name === 'Productos') return <InventoryIcon />
}