import PropTypes from 'prop-types';
import { StyledButton } from './ButtonStyled';

export const Button = ({ children, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
