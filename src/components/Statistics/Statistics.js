import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  persentGoodFeelback,
}) => {
  return (
    <StatList>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>
        Positive feelback: {total > 0 ? persentGoodFeelback : 0}%
      </StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persentGoodFeelback: PropTypes.number.isRequired,
};
