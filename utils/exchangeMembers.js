export const exchangeMembers = (members, indexes) => {
  let exchangedMembers = [];
  indexes.forEach(idx => {
    exchangedMembers.push(members[idx])
  });
  return exchangedMembers
}