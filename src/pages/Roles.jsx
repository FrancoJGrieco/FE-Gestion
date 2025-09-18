import ListPage from "../components/ListPage"
import RolCard from "../components/RolCard"
import useFetch from "../hooks/useFetch"

export default function Roles(){
  const type = 'roles'
  const { elementos: roles } = useFetch(type)

  return (
    <ListPage type={type} title={'Roles'} elementos={roles}>
      {(rol) => <RolCard rol={rol} />}
    </ListPage>
  )
}