import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


//Här har vi styled components
const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: white;
`;

const Fact = styled.p`
  font-size: 1.4rem;
  color: #666;
  width:50%;
  margin-left:auto;
  margin-right:auto;
`;

const DataFetchingComponent = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hämtar ett faktum om katter från API:et
    axios.get('https://catfact.ninja/fact')
      .then(response => {
        setFact(response.data.fact);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error{error.message}</p>;
  }

  return (
    <Container>
      <Title>Cat Fact</Title>
      <Fact>{fact}</Fact>
    </Container>
  );
};

export default DataFetchingComponent;