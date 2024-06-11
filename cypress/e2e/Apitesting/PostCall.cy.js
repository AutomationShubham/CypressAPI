


describe("Post API Request", ()=>
{
    it("Send Post Request Approch 1 - HardCoded", ()=>
    {
const  requestBody=
    {
        userId: 1,
        title: "shubham parekh",
        bodys: "new responce"
}
cy.request(
    {
        method:"POST",
        url:"https://jsonplaceholder.typicode.com/posts/",
        body: requestBody
    }
)
.then((response)=>{
    expect(response.status).to.eq(201)
    expect(response.body.bodys).to.eq("new responce")

})
    })
})