import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../Hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas al custom Hook useFetchGif', () => {

    test('debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('perfect loops') );        
        const {data,loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });

    test('debe retornar un arreglo de imgs y el loading false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('perfect loops') );        
        await waitForNextUpdate();

        const {data,loading} = result.current;        

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    
})
