import GlobalContext from "./helper/GlobalContext";

const mockUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
};

const TestUserClass = ({ children, currUser = mockUser, jobHasBeenApplied = () => false }) => (
  <GlobalContext.Provider value={{ currUser, jobHasBeenApplied }}>
    {children}
  </GlobalContext.Provider>
);

export { TestUserClass };