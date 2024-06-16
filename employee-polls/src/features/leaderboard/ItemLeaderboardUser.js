import Avatar from '../../assets/avatar.png';

export const ItemLeaderboardUser = ({ userInfo }) => {
	return (
		<tr key={userInfo.id}>
			<td>
				<div className='item-leaderboard'>
					<img src={Avatar} style={{ width: 30, height: 30 }} />
					<div className='item-leaderboard-info-container'>
						<h3 className='item-leaderboard-name'>
							{userInfo.name}
						</h3>
						<p className='item-leaderboard-id'>{userInfo.id}</p>
					</div>
				</div>
			</td>
			<td>{userInfo.answered ?? 0}</td>
			<td>{userInfo.questions}</td>
		</tr>
	);
};
