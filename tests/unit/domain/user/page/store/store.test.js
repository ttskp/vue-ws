import module, {initialState, CHANGE_NAME} from "@/domain/user/page/store";

describe('profile', () => {
  it.each`
  name         | expectedName
  ${'newUser'} | ${'newUser'} 
  ${undefined} | ${''}
  ${null}      | ${''}
  `('change name given name: $name expectedName: $expectedName', ({name, expectedName}) => {
    const state = initialState();
    module.mutations[CHANGE_NAME](state, name);
    expect(state.name).toEqual(expectedName);
  });
});
