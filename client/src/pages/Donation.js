import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { useQuery, useMutation} from '@apollo/client';

import { QUERY_ME_BASIC } from "../utils/queries";



const Donation = () => {
  const { loading, data } = useQuery(QUERY_ME_BASIC);
  const userData = data?.me || [];

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing donation page!</h1>
        </Container>
      </Jumbotron>
      
    </>
  );
};

export default Donation;
