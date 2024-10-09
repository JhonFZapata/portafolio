

function Nav() {
    return (
        <nav className="hidden md:block fixed top-1/2 right-5 transform -translate-y-1/2 space-y-4">
        <a href="#inicio" className="active nav-link block text-gray-500 hover:text-gray-900 text-lg">Inicio</a>
        <a href="#sobre-mi" className="nav-link block text-gray-500 hover:text-gray-700 text-lg">Sobre mí</a>
        <a href="#estudios" className="nav-link block text-gray-500 hover:text-gray-700 text-lg">Estudios</a>
        <a href="#contacto" className="nav-link block text-gray-500 hover:text-gray-700 text-lg">Contacto</a>
      </nav>
    )
}

export default Nav