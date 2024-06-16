import { useDispatch, useSelector } from 'react-redux';
import { changedFilterType } from './slice';

export const DropdownFilterAnswered = () => {
	const dispatch = useDispatch();
	const { filterAnswerType } = useSelector((state) => state.home);
	return (
		<select
			className='home-dropdown-filter-answer'
			onClick={(e) => e.stopPropagation()}
			value={filterAnswerType}
			onChange={(e) => dispatch(changedFilterType(e.target.value))}
		>
			<option value='all'>All</option>
			<option value='answered'>Answered</option>
			<option value='unanswered'>Unanswered</option>
		</select>
	);
};
