const exf = require('./echo.js');

test('exf function prints correctly',
 () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    
    // Act
    exf('test', 3);
    
    // Assert
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith('test2');
    expect(spy).toHaveBeenCalledWith('test1');
    expect(spy).toHaveBeenCalledWith('test0');
    
    // Clean up
    spy.mockRestore();
  });