import { BiLogoFacebook, BiLogoGithub, BiLogoGoogle, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import SectionTitle from '../SectionTitle/SectionTitle';
import LoginBtn from '../Share/LoginBtn';
import Social from '../Share/Social/Social';
import ZoneItem from '../Share/ZoneItem/ZoneItem';
import zone1 from '../../assets/images/qZone1.png';
import zone2 from '../../assets/images/qZone2.png';
import zone3 from '../../assets/images/qZone3.png';

const HomeRightSidebar = () => {
  return (
    <div className="lg:sticky lg:top-4 lg:self-start">
      <SectionTitle title="LogIn With" />
      <div className='space-y-2 pt-3'>
        <LoginBtn title="Login with Google" icon={<BiLogoGoogle />} />
        <LoginBtn title="Login with GitHub" icon={<BiLogoGithub />} />
      </div>
      <div className='py-5'>
        <SectionTitle title="Find Us On" />
        <div className='border border-base-300 rounded mt-3'>
          <Social text="Facebook" icon={<BiLogoFacebook />} link="#" />
          <Social text="Twitter" icon={<BiLogoTwitter />} link="#" />
          <Social text="Instagram" icon={<BiLogoInstagram />} link="#" />
        </div>
      </div>
      <div className='py-5 bg-base-200 px-3'>
        <SectionTitle title="Q-Zone" />
        <div className='mt-3 space-y-3'>
          <ZoneItem img={zone1} link="#" />
          <ZoneItem img={zone2} link="#" />
          <ZoneItem img={zone3} link="#" />
        </div>
      </div>
    </div>
  );
};

export default HomeRightSidebar;