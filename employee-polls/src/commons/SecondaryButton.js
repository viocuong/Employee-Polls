import PropType from 'prop-types';

export const SecondaryButton = ({ title, onClick, style }) => {
	return (
		<button style={style} onClick={onClick} className='secondary-button'>
			{title}
		</button>
	);
};

SecondaryButton.propTypes = {
	title: PropType.string.isRequired,
	onClick: PropType.func.isRequired,
};
