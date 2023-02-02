export type User = {
  id_user: number;
  username: string;
  email: string;
};

export const useUserStore = definePiniaStore(
  "user",
  () => {
    const user = ref<User | null>({
      id_user: 1,
      username: "Ohmmolina",
      email: "ohmmolina@gmail.com",
    });
    const getUser = computed(() => user.value);
    const setUser = (userToSet: User | null) => {
      if (!userToSet) return;
      if (user.value?.id_user === userToSet.id_user) return;
      user.value = userToSet;
      const storageUser = JSON.stringify(userToSet);
      sessionStorage.setItem("user", storageUser);
    };
    const getUserFromSession = () => {
      const storageUser = sessionStorage.getItem("user");
      if (!storageUser) return;
      const userFromSession = JSON.parse(storageUser);
      setUser(userFromSession);
    };
    getUserFromSession();
    return {
      getUser,
      setUser,
    };
  },
  {
    persist: true,
  }
);
