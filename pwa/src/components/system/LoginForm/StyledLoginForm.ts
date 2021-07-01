import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  .btn {
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.button.background};
    border: none;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    margin: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button.hover};
    }
  }

  &:hover {
    background-color: #4fe21f;
  }

  .btn-block {
    width: 46%;
    display: inline-block;
    align-content: stretch;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }

  .login {
    position: absolute;
    top: 40%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
  }

  .login h1 {
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    background: ${({ theme }) => theme.colors.background};
    border: none;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);
    -webkit-transition: box-shadow 0.5s ease;
    -moz-transition: box-shadow 0.5s ease;
    -o-transition: box-shadow 0.5s ease;
    -ms-transition: box-shadow 0.5s ease;
    transition: box-shadow 0.5s ease;

    ::placeholder {
      color: lightgrey;
    }

    :focus {
      box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4), 0 1px 1px rgba(255, 255, 255, 0.2);
    }
  }

  .error {
    color: white;
  }
`;
