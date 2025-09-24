import dollarPng from '../../assets/dollar1.png';
import navImg from '../../assets/logo.png';

const Navbar = () => {
    return (
              <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl">
      <img className='w-[100px] h-[100px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex text-black">
    <span>6000000000</span>
    <span className='ml-1'> Coin</span>
    <img className='ml-1' src={dollarPng} alt="" />
  </div>
</div>
    );
};

export default Navbar;