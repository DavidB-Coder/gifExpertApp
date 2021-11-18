import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('pruebas en el componente AddCategory', () => {
    
    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategory={setCategory}/>);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={setCategory}/>);
    })
    
    test('debe mostrar el contenido del componente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe funcionar el método onChnage', () => {
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change',{ target: {value}});

    });

    test('No debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        expect( setCategory ).not.toHaveBeenCalled();

    })

    test('debe llamar el setcategories y limpiar la caja de texto', () => {
        const value = 'test'
        const input = wrapper.find('input');
        input.simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect( setCategory ).toHaveBeenCalled();
        expect( input.prop('value') ).toBe('');
        
    })
    
    
    
    

})
