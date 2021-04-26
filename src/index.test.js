import { start } from './start'

jest.useFakeTimers('modern')

it('should call callback function in 3 seconds', () => {
    expect.assertions(2)
    
    const callback = jest.fn()

    start(callback)
    
    expect(callback).toHaveBeenCalledTimes(0)

    jest.runAllTimers()

    expect(callback).toHaveBeenCalledTimes(1)
})