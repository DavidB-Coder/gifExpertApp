import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../Hooks/useFetchGifs'
jest.mock('../../Hooks/useFetchGifs')

describe('Pruebas al componente GifGrid', () => {
    
    const category = "anyone"
    
    test('debe mostrar el contenido del componente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://url.com.co',
            title: 'titulo'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });
});
