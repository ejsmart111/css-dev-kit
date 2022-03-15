function Header() {
    const h2 = {
        color: '#f3f3f3',
    }

    const nav = {
        padding: '2px',
        background: '#9770d2',
        position: 'fixed',
        width: '100%',
        zIndex: '10'
    }

    const container = {
        margin: '0 auto',
        width: '70%'
    }

  return (
    <nav style={nav} >
        <div style={container}>
            <h2 style={h2} >CSS Development Kit</h2>       
        </div> 
    </nav>
  )
}

export default Header