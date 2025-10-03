export const styles = {
  // Estilos de ProductoCard
  bxCard: {
    backgroundColor: "darkgray",
    borderRadius: 0.5,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    height:'6.5rem',
    width:'13rem',
  },
  bxCardElement: {
    color: 'black',
    textDecoration: 'none',
    backgroundColor: 'gray',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  bxCardDes: {
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
    marginBottom: 1
  },
  bxCardInfo: {
    marginLeft: 1,
  },
  bxCardTitle:{
    fontSize: '1.3rem'
  },
  bxCardText:{
    fontSize: '1rem'
  },

  //Estilos de paginacion
  chevronBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    color: '#2563EB', /* azul de tu paleta */
    '&:hover': {
      color: '#1E3A8A',
    },
  },

  //Estilos de paginas
  Body: {
    color: '#F3F4F6'
  }
}