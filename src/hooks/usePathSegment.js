import { useLocation } from 'react-router-dom';

const usePathSegment = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const segment = pathname.split('/')[1];
  
  return segment;
};

export default usePathSegment;
