


describe("Http Request", () =>{
    it("Get Call", ()=>{
cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1")
.its('status')
.should('equal', 200);

    })

    it("POST Call", ()=>{
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body :   {
                
                    userId: 1,
                    title: "shubham parekh",
                    body: "new responce"
                
            }

        })
        .its('status')
        .should('equal', 201)
        
            })


            it("PUT Call", ()=>{
                cy.request({
                    method: 'PUT',
                    url: 'https://jsonplaceholder.typicode.com/posts/1',
                    body :   {
                        
                        userId: 1,
                        title: "updated data - PUT",
                        body: "put request",
                        id: 1
                        
                    }
        
                })
                .its('status')
                .should('equal', 200)
            
                
                    })

                    it("Delete call", ()=>
                    {


                        cy.request(
                            {
                                method : 'DELETE',
                                url: "https://jsonplaceholder.typicode.com/posts/1"
                            
                            })
                        
                            .its('status')
                            .should('equal', 200)
                    })
                    
                    
  
                    
})