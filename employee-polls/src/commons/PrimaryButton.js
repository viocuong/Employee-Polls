import PropType from 'prop-types';

export const PrimaryButton = ({ onClick, title, disabled = false }) => {
	return (
		<button
			disabled={disabled}
			className={`primary-button ${disabled && 'primary-button-disable'}`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

PrimaryButton.propTypes = {
	title: PropType.string.isRequired,
};
