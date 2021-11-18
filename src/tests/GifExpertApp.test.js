import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('pruebas al componente GifExpertApp', () => {

    test('debe mostrar correctamente el componente', () => {

        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['perfect loops','pink panter']

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    });
    
});
