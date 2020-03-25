import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      id
      username
      email
      role
    }
  }
`;

export const GET_TRANSACTION = gql`
  query($hash: ID!) {
    transaction(hash: $hash) {
      blockHash
      blockNumber
      to
      from
      data
      gasLimit {
        _hex
      }
      gasPrice {
        _hex
      }
      transactionIndex
      nonce
      confirmations
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query($limit: Int) {
    transactions(limit: $limit) {
      blockHash
      blockNumber
      to
      from
      data
      gasLimit {
        _hex
      }
      gasPrice {
        _hex
      }
      transactionIndex
      nonce
      confirmations
    }
  }
`;

export const TRANSACTION_CREATED = gql`
  subscription {
    transactionCreated {
      transaction {
        blockHash
        blockNumber
        to
        from
        data
      }
    }
  }
`;
