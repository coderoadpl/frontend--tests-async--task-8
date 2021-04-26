import { start } from './start'

it('should call callback function in 3 seconds', (done) => {
    expect.assertions(2)
    
    const callback = jest.fn(() => {
        expect(callback).toHaveBeenCalledTimes(1)
        done()
    })

    start(callback)

    expect(callback).toHaveBeenCalledTimes(0)
})