/// <reference types="mocha" />

import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import * as Sinon from 'sinon';
import { assert, expect } from 'chai';
import { configure, mount, ReactWrapper } from 'enzyme';

import HelloWorld from '../components/HelloWorld';
import { IHelloWorldProps } from '../components/IHelloWorldProps';
import { IHelloWorldState } from '../components/IHelloWorldState';
import { doesElementContainFocus } from '@uifabric/utilities';

//mocha.timeout(0);
configure({ adapter: new Adapter() });

describe('TestHelloworldwebpart', () => {

  const descTxt = "testdescription";
  let componentDidMountSpy: Sinon.SinonSpy;
  let renderedElement: ReactWrapper<IHelloWorldProps, IHelloWorldState>;

  beforeEach(() => {
    //componentDidMountSpy = Sinon.spy(HelloWorld.prototype, 'componentDidMount');
    renderedElement = mount(<HelloWorld description={descTxt} />);
  });

  afterEach(() => {
    renderedElement.unmount();
    //componentDidMountSpy.restore();
  });


  it('includeDescription', () => {
    //debugger;
    const titleSpan = renderedElement.find("#pDescription");
    assert(titleSpan != null && titleSpan.length == 1);
  });

  it('testButton', (done) => {
    //debugger;
    const btnTest = renderedElement.find("#btnTest").first();
    btnTest.simulate('click');
    setTimeout(_ => {
      const state = renderedElement.state();
      assert(state.result == 'clicked');
      done();
      console.log(state.result);
    }, 200);
  });
});
