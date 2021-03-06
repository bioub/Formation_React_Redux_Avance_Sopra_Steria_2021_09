import { createSelector } from '@reduxjs/toolkit'

export function selectUsers(state) {
  return state.users;
}

export function selectUsersLoading(state) {
  return selectUsers(state).loading;
}

export function selectUsersItems(state) {
  return selectUsers(state).items;
}

export function selectUsersItemsById(state, id) {
  return selectUsersItems(state).find((items) => items.id === Number(id));
}

// createSelector === memoisation
// export const selectUsersItemsById = createSelector(
//   (state, id) => selectUsersItems(state).find((items) => items.id === Number(id)),
// );
