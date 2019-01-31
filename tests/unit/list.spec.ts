import { assert, expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import Vue from 'vue';
import List from '@/views/List.vue';

describe('Input behavior checking', () => {

  beforeEach( 'name', () => {
    Vue.prototype.flash = () => '';
    Vue.directive('focus', {});
  });

  it('Is there input for task adding?', () => {
    const wrapper = shallowMount(List);
    wrapper.setData({ input: true });
    expect(wrapper.find('input[name="add"]').exists()).to.be.equal(true);
  });

  it('Will input try to submit task creation?', () => {
    const spy = sinon.spy();
    const wrap = shallowMount(List, {
      methods: {
        add: spy
      }
    });

    wrap.setData({input: true});

    const input = wrap.find('input[name="add"]');
    input.trigger('keydown.enter');
    expect(spy.called).to.be.equal(true);
  });

  it('Will it change newtask variable when type input', () => {
    const wrap = shallowMount(List);
    wrap.setData({input: true});
    wrap.find('input[name="add"]').setValue('Example');
    expect(wrap.vm.$data.newtask === 'Example');
  });

  it('Hide input when blur event', () => {
    const wrap = shallowMount(List);
    wrap.setData({input: true});
    wrap.find('input[name="add"]').trigger('blur');
    expect(wrap.vm.$data.input).to.be.equal(false);
  });
});
