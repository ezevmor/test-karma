describe('agregando',function(){
    it('debe agregar texto',function(){
        expect(agregar('esto')).toEqual('esto a esto')
    })
});

describe('agregando_otro',function(){
    it('debe agregar otro texto',function(){
        expect(agregar_otro('nuevo')).toEqual('nuevo a esto otro')
    })
});