import { List, Item, ItemValue, Notyfy } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <div>
            {!total ? (
                <Notyfy>There is no feedback</Notyfy>
            ) : (
                <List>
                    <Item>
                        Good:<ItemValue>{good}</ItemValue>
                    </Item>
                    <Item>
                        Neutral:<ItemValue>{neutral}</ItemValue>
                    </Item>
                    <Item>
                        Bad:<ItemValue>{bad}</ItemValue>
                    </Item>
                    <Item>
                        Total:<ItemValue>{total}</ItemValue>
                    </Item>
                    <Item>
                        Positive feedback:<ItemValue>{positivePercentage}</ItemValue>%
                    </Item>
                </List>
            )}
        </div>
    );
};

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;