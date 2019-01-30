import { expect } from 'chai';
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import List from '@/views/List.vue';

beforeEach( 'name', () => {
  Vue.prototype.flash = () => {};
}),

describe('Basic list checks', () => {
  it('Is there add list button?', () => {
    const wrapper = shallowMount(List);
    wrapper.setData({ input: true });
    expect(wrapper.find('input[name="add"]').exists()).to.be.equal(true);
  });
});
