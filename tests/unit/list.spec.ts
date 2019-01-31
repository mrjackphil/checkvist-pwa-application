import { assert, expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import Vue from 'vue';
import List from '@/views/List.vue';

beforeEach( 'name', () => {
  Vue.prototype.flash = () => '';
}),

describe('Basic list checks', () => {

  it('Is there add task input?', () => {
    const wrapper = shallowMount(List);
    wrapper.setData({ input: true });
    expect(wrapper.find('input[name="add"]').exists()).to.be.equal(true);
  });

  it('Will it try to submit task creation?', () => {
    const spy = sinon.spy();
    const wrap = shallowMount(List, {
      methods: {
        add: spy
      }
    });

    wrap.setData({input: true});

    const input = wrap.find('input[name="add"]');
    input.setValue('New task example');
    input.trigger('keydown.enter');
    assert(spy.called === true);
  });

  it('Will it change newtask variable when type input', () => {
    const wrap = shallowMount(List);
    wrap.setData({input: true});
    wrap.find('input[name="add"]').setValue('Example');
    expect(wrap.vm.$data.newtask === 'Example');
  });

});
