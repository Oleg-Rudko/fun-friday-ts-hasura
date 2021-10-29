import { useMutation } from '@apollo/client';

export { gql } from '@apollo/client';

export const useMutationGraphql = (gqlMutation, options) => {
  return useMutation(gqlMutation, options);
};
