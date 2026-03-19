function Header(){


    const linkStyle = {
        textDecoration: 'none',
        color: "#333",
    };

    return (



        <header>
            <h1>Abdullah Al Sayed</h1>
            <nav style ={{backgroundColor:"white", justifyContent:"center", display:"flex",textAlign:"center", gap: "30px"}} >
                    <a href="#" style={linkStyle}>Home</a>
                    <a href="#" style={linkStyle}>About</a>
                    <a href="#" style={linkStyle}>Contact</a>
                    <a href="#" style={linkStyle}>blogs</a>
            </nav>
        </header>
    );
}

export default Header