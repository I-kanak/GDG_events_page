const Navbar = () => {
  return (
    <>
      <header className="bg-black text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#home">
            <img
              src="/gdg_logo.png"
              alt="GDG Logo"
              style={{ height: '3cm', width: 'auto', marginLeft: '2.5cm' }}
            />
          </a>
          <ul className="flex" style={{ gap: '1.2cm', marginRight: '2.5cm' }}>
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#events" className="hover:text-gray-400">Events</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#members" className="hover:text-gray-400">Members</a></li>
            <li><a href="#aboutUs" className="hover:text-gray-400">About Us</a></li>
          </ul>
        </nav>
      </header>
      <div className="border-t border-white" style={{ marginTop: '-0.5cm' }}></div>
    </>
  );
};

export default Navbar;
