import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import App from '../../App';
Enzyme.configure({ adapter: new Adapter() });
