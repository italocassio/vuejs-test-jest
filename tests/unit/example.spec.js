import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import HiChild from '@/components/HiChild.vue';
import Sum from '@/components/Sum.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('HiChild.vue', () => {
  it('renders props.msg when passed', () => {
    const message = 'hi child';
    const wrapper = shallowMount(HiChild, {
      propsData: { message },
    });
    expect(wrapper.text()).toMatch(message);
  });

  it('renders error when message is too short', () => {

    const wrapper = shallowMount(HiChild, {
      propsData: { message: "hi" },
    });
    expect(wrapper.find(".error").exists()).toBe(true);
   // wrapper.setProps({ message: "good day to you!" });
   // expect(wrapper.find(".error").exists()).toBe(false);
  });

});

describe('Sum.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Sum, {
      // methods : { somar : () => {}}
    })
  })

  it("render", () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('set props and get sum text', () => {
    const number1 = "5";
    const number2 = "2";
    const wrapper = shallowMount(Sum, {
      propsData: { number1: number1, number2: number2},
    });
    expect(wrapper.props().number1).toBe(number1)
    expect(wrapper.props().number2).toBe(number2)
    expect(wrapper.find(".soma").text()).toBe("7")
  })

  it('test sum', () => {
    const number1 = "4";
    const number2 = "2";
    const wrapper = shallowMount(Sum, {
      propsData: { number1: number1, number2: number2},
    });
    expect(wrapper.vm.$data.sum).toBe(6);
  })

  it('test subtrair click', () => {
    const number1 = "5";
    const number2 = "2";
    const wrapper = shallowMount(Sum, {
      propsData: { number1: number1, number2: number2},
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.sub).toBe(3);
  })

})

