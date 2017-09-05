import Loadable from 'react-loadable';
import Loading from './MyLoadingComponent';

export default function MyLoadable(opts) {
    return Loadable(Object.assign({
      loading: Loading,
      delay: 200,
      timeout: 10,
    }, opts));
  };