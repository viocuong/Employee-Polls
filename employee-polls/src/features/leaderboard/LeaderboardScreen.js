import { useMemo } from 'react';
import './leaderboard.css';
import { useSelector } from 'react-redux';
import { ItemLeaderboardUser } from './ItemLeaderboardUser';
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
				if (firstUser.answered !== secondUser.answered) {
					return secondUser.answered - firstUser.answered;
				}
				return secondUser.questions - firstUser.questions;
			});
	}, [users]);
	return <TableLeaderboard data={data} />;
};
