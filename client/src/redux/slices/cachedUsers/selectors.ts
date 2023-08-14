import { RootState } from "../../store";

export const selectCachedUser = (state: RootState, id: string) =>
  state.cachedUsers.find((user) => user.id === id);
