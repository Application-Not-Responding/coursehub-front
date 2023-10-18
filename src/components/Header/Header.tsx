import CreateCourse from '../CreateCourse/CreateCourse'
import Notification from '../Notification/Notification'
import SearchBar from '../SearchBar/SearchBar'
import UserInfo from '../UserInfo/UserInfo'

const Header = () => {
	return (
		<div className='bg-gray_shade_color p-7 shadow-lg flex items-center gap-4'>
			<SearchBar />
			<Notification />
			<CreateCourse />
			<UserInfo />
		</div>
	)
}

export default Header
