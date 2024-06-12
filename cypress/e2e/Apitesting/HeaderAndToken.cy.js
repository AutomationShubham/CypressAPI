


describe("API Header and Token Check", ()=>
{

    let authtoken=null;
    before("creating access token", ()=>
    {
        cy.request(
            {

                method:'POST',
                url:'https://simple-books-api.glitch.me/api-clients/',
                headers: { 'Content-Type': 'application/json'},
                body:{
                    
                        clientName: "shubham",
                        clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
                     

                }

            }).then((response) =>
            {
                authtoken=response.body.accessToken;
                cy.log(`Access Token: ${authtoken}`);

            });
    });

    before("creating order using token", ()=>
        {
            cy.request(
                {
    
                    method:'POST',
                    url:'https://simple-books-api.glitch.me/orders/',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer '+authtoken

                    },
                    body:{
                        
                            "bookId": 1,
                           "customerName": "ShubhamParekh"
                         
    
                    }
    
                }).then((response) =>
                {
                   expect(response.status).to.eq(201);
                   expect(response.body.created).to.eq(true);
    
                });
        });

        it("Get Order Details", ()=>
        {

            cy.request({
                method:'GET',
                url:'https://simple-books-api.glitch.me/orders/',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+authtoken
                },
                cookies:
                {
                    'cookieName': 'mycookie'
                }
            })
            .then((response)=>
            {
                expect(response.status).to.eq(200);  
                expect(response.body).has.length(1);
            })

        })

    
  
})