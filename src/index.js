import routes from './routes';
import './jsFile/Home';
import './jsFile/PageDetail';
import './jsFile/PageList';
import './style/mixins/cardStyling.scss'
import './style/index.scss';
import { Search } from './jsFile/searchBar';

const callRoute = () => {
    const { hash } = window.location;
    const pathParts = hash.substring(1).split('/');
  
    const pageName = pathParts[0];
    const pageArgument = pathParts[1] || '';
    const pageFunction = routes[pageName];
  
    if (pageFunction !== undefined) {
      pageFunction(pageArgument);
    }
  };
  
  window.addEventListener('hashchange', () => callRoute());
  window.addEventListener('DOMContentLoaded', () => callRoute());

Search();
