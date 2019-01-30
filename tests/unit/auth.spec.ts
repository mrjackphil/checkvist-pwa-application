import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Auth from '@/views/Auth.vue';

describe('Check authorization fields', () => {
  it('Is [name="title"] eq "Checkvist', () => {
    const wrapper = shallowMount(Auth);
    expect(wrapper.find('[name="title"]').text()).equal('Checkvist');
  });
  it('Check right login placeholder', () => {
    const wrapper = shallowMount(Auth);
    expect(
      wrapper.find('input[name="email"]').attributes('placeholder'),
    ).equal('Your checkvist email');
  });
  it('Check right password placeholder', () => {
    const wrapper = shallowMount(Auth);
    expect(
      wrapper.find('input[name="password"]').attributes('placeholder'),
    ).equal('Your checkvist password');
  });
});

describe('Check submit button', () => {
  it('Show description if button "Login" clicked and login/pass not valid', () => {
    const wrapper = shallowMount(Auth);
    wrapper.find('input[name="email"]').setValue('nogn@ngal.ru');
    wrapper.find('input[name="password"]').setValue('nogn@ngal.ru');
    wrapper.find('button[name="login"]').trigger('click');
    expect(wrapper.find('[name="description"]').isVisible()).eq(true);
  });
});
