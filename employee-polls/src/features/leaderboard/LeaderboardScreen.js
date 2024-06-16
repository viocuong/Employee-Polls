import { useMemo } from 'react';
import './leaderboard.css';
import { useSelector } from 'react-redux';
import { TableLeaderboard } from './TableLeaderboard';

export const LeaderboardScreen = () => {
	const { users } = useSelector((state) => state.auth);
	const data = useMemo(() => {
		return Object.values(users)
			.map((user) => {
				return {
					name: user.name,
					id: user.id,
					answered: Object.keys(user.answers).length,
					questions: user.questions.length,
				};
			})
			.sort((firstUser, secondUser) => {
				return (
					secondUser.answered +
					secondUser.questions -
					(firstUser.answered + firstUser.questions)
				);
			});
	}, users);
	return <TableLeaderboard data={data} />;
};
