/**
 * @name FormTransactionRequest
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import {useState} from 'react';
import {PropTypes} from 'prop-types';
import {useForm} from 'react-hook-form';

import {fetchTransaction} from '@fetching';
/* --- Component --- */
const FormTransactionRequest = ({styled, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      fetchTransaction(values.hash);
      setComplete(true); // TODO @kamescg Validate submission and add storage mutation
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name="hash"
        placeholder="Transaction Hash"
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Atom.Button bg="orange" color="white" sx={{mt: 2, width: '100%'}}>
        {isComplete ? (
          <Atom.Span>Complete!</Atom.Span>
        ) : (
          <Atom.Span>Request Transaction Data</Atom.Span>
        )}
      </Atom.Button>
    </form>
  );
};

FormTransactionRequest.defaultProps = {
  styled: {},
};

FormTransactionRequest.propTypes = {
  styled: PropTypes.object,
};

export default FormTransactionRequest;
