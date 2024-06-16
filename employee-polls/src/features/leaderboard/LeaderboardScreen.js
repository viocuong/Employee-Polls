import { useMemo } from 'react';
import './leaderboard.css';
import { useSelector } from 'react-redux';
import { ItemLeaderboardUser } from './ItemLeaderboardUser';

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
					return (
						secondUser.answered +
						secondUser.questions -
						(firstUser.answered + firstUser.questions)
					);
				}
				return secondUser.questions - firstUser.questions;
			});
	}, users);
	return (
		<div>
			<table>
				<tr className='leader-board-table-header'>
					<th style={{ width: 500 }}>User</th>
					<th style={{ width: 200 }}>Answered</th>
					<th style={{ width: 200 }}>Created</th>
				</tr>
				{data.map((userInfo) => {
					return <ItemLeaderboardUser userInfo={userInfo} />;
				})}
			</table>
		</div>
	);
};
