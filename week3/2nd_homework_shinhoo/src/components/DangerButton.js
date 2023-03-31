import styled from 'styled-components';
import Button from './GeneralButton.js';

const LogoutButton = styled(Button)`
  background-color: #990000;
  border-color: #990000;
  &:hover {
        background: #ff0000;
      }
`;

export default LogoutButton;