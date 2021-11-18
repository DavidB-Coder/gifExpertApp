import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGif Fetch', () => {

    test('debe traer 10 elementos', async () => {
        
        const gifs = await getGifs('pink panter');

        expect(gifs.length).toBe(10);

    })
    
    
})
