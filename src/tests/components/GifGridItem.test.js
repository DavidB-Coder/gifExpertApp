import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en GifGridItem', () => {

    const title = "un título";
    const url = "https://url.com.co";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>) 

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()       
    })

    test('debe tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })
    
    test('debe tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find( 'img' );
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })
    
    test('debe tener clase animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        expect(div.hasClass('animate__bounceIn')).toBe(true)

    })
    
    
    

})
