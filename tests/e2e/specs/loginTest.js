// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Check when login passed': browser => {
    browser
	  .url(process.env.VUE_DEV_SERVER_URL)
	  .waitForElementVisible('input', 500)
	  .setValue('input[type=email]', 'login')
	  .setValue('input[type=password]', 'checkvist_pass')
	  .click('button');
    browser.expect.element('[name=title]').text.to.equal('List').before(1000);
    browser.end();
  },

  'Is there tasks': browser => {
    browser.url(process.env.VUE_DEV_SERVER_URL + '/#/list')
    .waitForElementVisible('[name=task]')
    .end();
  }
};
