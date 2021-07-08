/**
 * @format
 */
 import React, { useEffect } from 'react';

 import {Button, Pressable} from 'react-native';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 import  Login  from './index';
 import { render, fireEvent, act } from "@testing-library/react-native";
import { TRANSLATIONS_EN } from 'translations/en/translation';
const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));
 // it('calls the toggleEmailPasswordModal method', () => {
 //   const wrapper = shallow(<App />);
 //   // const instance = wrapper.instance();
 //   // const spy = jest.spyOn(instance, 'toggleEmailPasswordModal');
 
 //   // This is added per https://stackoverflow.com/questions/44769404/jest-spyon-function-called/44778519#44778519
 //   // instance.forceUpdate();
 //   wrapper.find(Button).first().props().onPress();
 
 //   // expect(spy).toHaveBeenCalledTimes(1);
 //   // expect(instance.state.emailPasswordModalVisible).toBe(true);
 // });
 
 // it('renders correctly', () => {
 //   renderer.create(<App />);
 // });
 // jest.mock(../App);
 
//  test('renders correctly', () => {
  //  let tree = renderer.create(<Login />).getInstance();
  //  expect(tree.onEmailChangeText(true)).toEqual(true);
//  });
 
it("renders default elements", () => {

  const { getAllByText, getByPlaceholderText, getByText, getByTestId, getByLabelText } = render(<Login />);

  expect(getAllByText("Login").length).toBe(1);
  expect(getByTestId('LoginTitle')).toBeTruthy();
  expect(getByText(TRANSLATIONS_EN.str_user_name)).toBeTruthy();
  expect(getByText(TRANSLATIONS_EN.str_password)).toBeTruthy();

 
});

it("shows invalid input messages", () => {
  const { getByTestId, getByText } = render(<Login />);

  fireEvent.press(getByTestId("Login.Button"));

  getByText("Invalid username.");
  getByText("Invalid password.");
});

it("shows invalid user name error message", () => {
  const { getByTestId, getByText, queryAllByText } = render(<Login />);

  fireEvent.changeText(getByTestId("Login.password"), "asdf");

  fireEvent.press(getByTestId("Login.Button"));

  getByText("Invalid username.");
  expect(queryAllByText("Invalid password.").length).toBe(0);

  fireEvent.changeText(getByTestId("Login.email"), "invalid input");

  getByText("Invalid username.");
  expect(queryAllByText("Invalid password.").length).toBe(0);
});

it("shows invalid password error message", () => {
  const { getByTestId, getByText, queryAllByText } = render(<Login />);

  fireEvent.changeText(getByTestId("Login.email"), "example");

  fireEvent.press(getByTestId("Login.Button"));

  getByText("Invalid password.");
  expect(queryAllByText("Invalid username.").length).toBe(0);

  fireEvent.changeText(getByTestId("Login.password"), "invalid input");

  getByText("Invalid password.");
  expect(queryAllByText("Invalid username.").length).toBe(0);
});

it("handles valid input submission", async () => {
  fetch.mockResponseOnce(JSON.stringify({ passes: true }));

  const pushMock = jest.fn();
  const { getByTestId } = render(<Login navigation={{ push: pushMock }} />);

  fireEvent.changeText(getByTestId("Login.email"), "example@gmail.com");
  fireEvent.changeText(getByTestId("Login.password"), "asdf");
  fireEvent.press(getByTestId("Login.Button"));

  expect(fetch.mock.calls).toMatchSnapshot();
  await act(flushMicrotasksQueue);

  expect(pushMock).toBeCalledWith("Login");
});

 // test('it calls start logout on button click', () => {
 //   const mockLogout = jest.fn();
 //   const wrapper = shallow(<Button onPress={mockLogout} />);
 //   wrapper.find('button').at(0).simulate('click');
 //   expect(mockLogout).toHaveBeenCalled();
 // });
 
 // describe('Test Button component', () => {
 //   it('Test click event', () => {
 //     const mockCallBack = jest.fn();
 
 //     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
 //     button.find('button').simulate('click');
 //     expect(mockCallBack.mock.calls.length).toEqual(1);
 //   });
 // });
 