import React from "react";
import { mount } from "enzyme";
import Root from 'Root';
import CommentBox from "components/CommentBox";

describe("CommentBox", () => {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Root>
          <CommentBox />
        </Root>
        );
    });

    afterEach(() => {
      wrapper.unmount();
    });

  it("shows a text area and a button", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  describe("textarea", () => {
    beforeEach(() => {
      wrapper.find("textarea").simulate("change", {
        target: { value: "new comment" }
      });
      wrapper.update();
    });

    it("lets user type in text area", () => {
      expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
    });

    it("clears text area after submit", () => {
      wrapper.find("form").simulate("submit", { preventDefault() {} });
      wrapper.update();
      expect(wrapper.find("textarea").prop("value")).toEqual("");
    });
  });
});
