// import styles from './HomeTab.module.css'
import { useMediaQuery } from 'react-responsive';
import Balance from '../Balance/Balance';

function HomeTab() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTabletOrDesktop = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });
  
  return (
    <>
      {isMobile && <Balance />}
      <div>HomeTab</div>
    </>
  );
}

export default HomeTab;
