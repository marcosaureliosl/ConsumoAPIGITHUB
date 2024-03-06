import styled from 'styled-components';

const corPrincipal = '#FF4D4D';    // Vermelho mais vibrante
const corHover = '#FF3333';        // Cor para o estado de hover mais intensa
const corBorda = '#E06666';        // Cor da borda
const corTexto = '#ffffff';        // Cor do texto
const corFundoCard = '#2f0909';    // Cor de fundo do card

export const SearchButton = styled.button`
  border-radius: 8px;
  border: 1px solid ${corPrincipal};
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${corPrincipal};
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;

  &:hover {
    background-color: ${corHover};
    border-color: ${corHover};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  border: 2px solid ${corBorda};
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  background-color: ${corFundoCard};
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    border-radius: 50%;
    width: 250px; 
    height: 250px; 
    border: 2px solid ${corBorda};
  }

  h2 {
    color: ${corBorda};
  }

  P {
    color: ${corPrincipal};
  }

  h3 {
    color: ${corHover};
  }
`;

export const Input = styled.input`
  border: 2px solid ${corBorda};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.1rem;
  color: ${corTexto};
  margin: 10px;
`;
