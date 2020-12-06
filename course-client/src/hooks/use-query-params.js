import querystring from 'querystring';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const { search } = useLocation();
  return querystring.parse(search.slice(1));
};

export default useQueryParams;
