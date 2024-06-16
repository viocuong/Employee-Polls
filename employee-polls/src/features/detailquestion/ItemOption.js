export const ItemOption = ({
	onVote,
	message,
	voted,
	showDetail,
	numberOfPeople,
	percentage,
}) => {
	console.log(showDetail);
	return (
		<div className='detail-question-option-container'>
			<div style={{ flexGrow: 1 }}>
				<p className='detail-question-option-title'>{message}</p>
				{showDetail && (
					<p className='detail-question-option-title'>
						Number of peoples: {numberOfPeople}
					</p>
				)}
				{showDetail && (
					<p className='detail-question-option-title'>
						Percentage: {percentage}%
					</p>
				)}
			</div>
			<button
				disabled={showDetail}
				onClick={onVote}
				className={`detail-question-option-button ${
					showDetail && 'detail-button-disable'
				}`}
			>
				{voted ? 'Voted' : 'Click'}
			</button>
		</div>
	);
};
