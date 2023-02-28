const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-100">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <h1>Logo</h1>
          <nav className="flex justify-center items-center list-none space-x-6">
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>FAQ</li>
          </nav>
          <button>Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
