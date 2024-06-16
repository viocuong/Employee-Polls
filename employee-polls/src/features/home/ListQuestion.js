import PropType from 'prop-types';
import { ItemQuestion } from './ItemQuestion';
import { useNavigate } from 'react-router-dom';

export const ListQuestions = ({ title, questions }) => {
	const navigate = useNavigate();
	return (
		<div className='list-question-container'>
			<div className='list-question-header-container'>
				<h1 className='list-question-header'>{title}</h1>
			</div>
			<div className='list-question-body-container'>
				{questions.map((question) => (
					<ItemQuestion
						key={question.id}
						onShow={() => {
							navigate(`/questions/${question.id}`);
						}}
						title={question.author}
						description={new Date(
							question.timestamp,
						).toDateString()}
					/>
				))}
			</div>
		</div>
	);
};

ListQuestions.propTypes = {
	title: PropType.string.isRequired,
	questions: PropType.array.isRequired,
};
