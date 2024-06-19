import { create } from "zustand";

const UserNameStore = create((set) => ({
  username: "github",
  changeUsername: (usernameInput) => {
    set({ username: usernameInput });
  },
}));

export default UserNameStore;
