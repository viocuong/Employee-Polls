import { SecondaryButton } from '../../commons/SecondaryButton';

export const ItemQuestion = ({ title, description, onShow }) => {
	return (
		<div className='item-question'>
			<p className='item-question-title'>{title}</p>
			<p className='item-question-description'>{description}</p>
			<div className='divider' style={{ marginTop: 10 }}></div>
			<div
				style={{
					padding: 5,
					display: 'flex',
					alignItems: 'center',
					alignSelf: 'stretch',
				}}
			>
				<SecondaryButton
					style={{ width: 300 }}
					title='Show'
					onClick={onShow}
				/>
			</div>
		</div>
	);
};
