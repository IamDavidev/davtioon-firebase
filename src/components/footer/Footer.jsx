import { GrGithub } from 'react-icons/gr';
import { StyledFooter } from './StyledFooter';

const Footer = () => {

  return (
    <StyledFooter>
    <div className=' '>

      <a href="https://github.com/itsDavidev" target='_blank'>
        <GrGithub />
        David Lezama
      </a>
      &copy; 
      
    </div>
    </StyledFooter>
  );
};

export default Footer;
