const getLoggedOn = state => state.auth.isLoggedOn;

const getUserName = state => state.auth.user.login;

const getUserToken = state => state.auth.token;

const getLoading = state => state.auth.isLoading;

export default { getLoggedOn, getUserName, getUserToken, getLoading };
