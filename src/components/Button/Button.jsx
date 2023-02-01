import { ButtonLoadMore } from './Button.styled'
import PropTypes from 'prop-types';

export const Button = ({onClick}) => {
    return (
        <ButtonLoadMore onClick={onClick}>LOAD MORE...</ButtonLoadMore>
    )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired}.isRequired