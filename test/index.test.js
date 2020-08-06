const httpFunction = require('../HttpTrigger1Test/index');

const DurabelFnHTTP = require('../DurableFunctionsHttpStart1/index')
const context = require('./lib/defaultContext')
const mock = require('./mocks/index.json')
test('Http trigger should return known text', async () => {

    const request = mock

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    // expect(context.res.body).toEqual('Hello Bill');
});
test('Context  test',async() =>{
 
 
    // todo
} )