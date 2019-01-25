import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Auth from '@/views/Auth.vue';

describe('Check authorization fields', () => {
  it('Is [name="title"] eq "Checkvist', () => {
    const component = mount(Auth);
    expect(component.find('[name="title"]').text()).equal('Checkvist');
  });
  it('Check right login placeholder', () => {
    const component = mount(Auth);
    expect(component.find('input[name="email"]').attributes('placeholder')).equal('Your checkvist email');
  });
  it('Check right password placeholder', () => {
    const component = mount(Auth);
    expect(component.find('input[name="password"]').attributes('placeholder')).equal('Your checkvist password');
  });
});

describe('Check submit button', () => {
  it('Show description if button "Login" clicked and login/pass not valid', () => {
	const component = mount(Auth);
	component.find('input[name="email"]').setValue('nogn@ngal.ru');
	component.find('input[name="password"]').setValue('nogn@ngal.ru');
    component.find('button[name="login"]').trigger('click');
    expect(component.find('[name="description"]').isVisible()).eq(true);
  });
});
