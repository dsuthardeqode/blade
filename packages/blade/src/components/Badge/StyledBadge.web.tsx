import styled from 'styled-components';
import { getStyledBadgeStyles } from './getStyledBadgeStyles';
import type { StyledBadgeProps } from './StyledBadge.d';

const StyledBadge = styled.div<StyledBadgeProps>((props) => ({
  ...getStyledBadgeStyles(props),
  width: 'fit-content',
  borderStyle: 'solid',
}));

export { StyledBadge };