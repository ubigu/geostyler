/* Released under the BSD 2-Clause License
 *
 * Copyright © 2018-present, terrestris GmbH & Co. KG and GeoStyler contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import { TextFilterField, TextFilterFieldProps } from './TextFilterField';
import TestUtil from '../../../Util/TestUtil';

describe('TextFilterField', () => {

  let wrapper: any;
  let onValueChangeDummy: jest.Mock;
  beforeEach(() => {
    const dummyData = TestUtil.getDummyGsData();
    onValueChangeDummy = jest.fn();
    const props: TextFilterFieldProps = {
      internalDataDef: dummyData,
      onValueChange: onValueChangeDummy,
      validateStatus: 'success'
    };
    wrapper = TestUtil.shallowRenderComponent(TextFilterField, props);
  });

  it('is defined', () => {
    expect(TextFilterField).toBeDefined();
  });

  it('renders correctly', () => {
    expect(wrapper).not.toBeUndefined();
  });

  describe('#onInputChange', () => {
    it('is defined', () => {
      expect(wrapper.instance().onInputChange).toBeDefined();
    });

    it('calls onValueChange of props', () => {
      const evtMock = {
        target: {
          value: 'Test'
        }
      };
      wrapper.instance().onInputChange(evtMock);
      expect(onValueChangeDummy.mock.calls).toHaveLength(1);
    });
  });

  describe('#onAutoCompleteChange', () => {
    it('is defined', () => {
      expect(wrapper.instance().onAutoCompleteChange).toBeDefined();
    });
  });

});
