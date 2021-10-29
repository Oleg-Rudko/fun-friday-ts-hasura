import { useSubscription } from '@apollo/client';
export { gql } from '@apollo/client';

export const useSubscriptionGraphql = (gqlQuery, options) => {
  return useSubscription(gqlQuery, { fetchPolicy: 'network-only', ...options });
};
