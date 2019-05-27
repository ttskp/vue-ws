import module, {initialState, CHANGE_NAME} from "@/domain/user/page/store";

describe('profile', () => {
  it('change name', () => {
    const state = initialState();
    module.mutations[CHANGE_NAME](state, 'newUser');
    expect(state.name).toEqual('newUser');
  });
});
