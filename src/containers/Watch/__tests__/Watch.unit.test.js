import React from "react";
import { shallow } from "enzyme";
import { Watch } from "../Watch";
import { exportAllDeclaration } from "@babel/types";

describe("Watch", () => {
  
  test("renders", () => {
    const wrapper = shallow(<Watch />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
