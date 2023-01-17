function Navbar({cartCount}){
    return(
        <nav>
            <span>Cosul meu</span>
            <span>{cartCount}</span>
        </nav>
    );
}

export default Navbar;