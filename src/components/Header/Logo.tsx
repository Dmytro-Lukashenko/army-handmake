import logo from '../../../public/logo.png'; 

const Logo = () => (
  <a href="#rehab" className="text-black font-semibold hover:text-gray-300 transition-colors">
    <img
      src={logo}
      alt="Logo"
      className="block max-w-[200px] h-auto"
    />
  </a>
);

export default Logo;