


describe("API Testing", ()=>
{

    it("passsing query parameter", ()=>
    {

        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users',
            qs:{page :2}


        })
        .then((response)=>
        {
            expect(response.status).to.eq(200);
            
        })
    })

})