import Elementos from "../components/Elementos"
import Filters from "../components/Filters"
import ListPage from "../components/ListPage"
import RolCard from "../components/RolCard"
import useFetch from "../hooks/useFetch"

export default function Roles(){
  const type = 'roles'
  const { elementos: roles } = useFetch(type)

  return (
    <ListPage type={type} title={'Roles'}>
      <>
        <Filters />
        <Elementos elementos={roles} >{(rol) => <RolCard rol={rol} />}</Elementos>
      </>
    </ListPage>
  )
}