import styled from 'styled-components';

export default styled.div`
  background: white;
  display: inline-block;
  border: 1px solid #c2c3c9;
  border-radius: 4px;
  padding: 5px 8px;

  div {
    display: inline-block;
  }

  .has-error {
    border-color: #a94442;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }

  input {
    width: 30px;
    border: none;
    outline: none;
    text-align: center;
  }
`;
