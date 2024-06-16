import { ItemLeaderboardUser } from './ItemLeaderboardUser';

export const TableLeaderboard = ({ data }) => {
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
