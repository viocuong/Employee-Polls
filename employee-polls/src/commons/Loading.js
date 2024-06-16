export const Loading = ({ loading }) => {
	if (!loading) return null;
	return (
		<div className='loading-container'>
			<div className='loading'></div>
		</div>
	);
};
