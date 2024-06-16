import { NewPollForm } from './NewPollForm';
import './newpoll.css';

export const NewPollScreen = () => {
	return (
		<div className='new-poll-container'>
			<h1 className='new-poll-title'>Would You Rather</h1>
			<p style={{ margin: 0 }} className='new-poll-description'>
				Create Your Own Poll
			</p>
			<NewPollForm />
		</div>
	);
};
