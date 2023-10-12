require ( './helpers.js' );

const { expect } = require('chai');
const sinon = require('sinon');

describe('Konami Code', function () {
  let alertStub;

  before(function () {
    // Create a Sinon stub for the window.alert function
    alertStub = sinon.stub(window, 'alert');
  });

  beforeEach(function () {
    // Reset the alertStub before each test
    alertStub.reset();
  });

  after(function () {
    // Restore the original behavior of window.alert
    alertStub.restore();
  });

  it('should display "Hurray!" alert for correct Konami Code', function () {
    // The Konami Code sequence
    const code = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];

    // Trigger the correct Konami Code sequence
    for (const key of code) {
      const event = new KeyboardEvent('keydown', { key });
      document.body.dispatchEvent(event);
    }

    // Assert that the alert was called
    expect(alertStub.calledOnce).to.be.true;

    // Assert that the alert message is "Hurray!"
    expect(alertStub.getCall(0).args[0]).to.equal('Hurray!');
  });

  it('should not display "Hurray!" alert for incorrect code', function () {
    // Trigger an incorrect key sequence
    const event = new KeyboardEvent('keydown', { key: 'x' });
    document.body.dispatchEvent(event);

    // Assert that the alert was not called
    expect(alertStub.called).to.be.false;
  });
});
