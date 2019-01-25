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
  },
  'Create a task': browser => {
	const curtask = Math.random();
	browser
	  .url(process.env.VUE_DEV_SERVER_URL+'/#/List')
	  .waitForElementVisible('button[name=new]')
	  .click('button[name=new]')
	  .setValue('input[name=task]', 'New task example #' + curtask)
	  .click('[name=title]'); //Click anywhere outside of input
	browser.expect.element('div[text()="New task example #' + curtask).to.be.visible;
  },
  'Check if can find task': browser => {
    browser
	  .url(process.env.VUE_DEV_SERVER_URL+'/#/List')
	  .waitForElementVisible('[name=task]', 500)
	  .end();
  }
};
