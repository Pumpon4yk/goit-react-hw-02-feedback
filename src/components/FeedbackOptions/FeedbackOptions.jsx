import { ContainerBtn, Button } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <ContainerBtn>
            {options.map((e, ind) => (
                        <Button
                            key={ind}
                            value={e.toLowerCase()}
                            onClick={onLeaveFeedback}
                        >
                            {e}
                        </Button>
                    ))}
        </ContainerBtn>
    )
}

FeedbackOptions.propTypes ={
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;