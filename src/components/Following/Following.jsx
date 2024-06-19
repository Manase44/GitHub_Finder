import Follow from "../Follow/Follow"
import apiFetch from "../API/API"
import UserNameStore from '../../Store/usernameStore'

const Following = () => {
  const username = UserNameStore((state) => state.username);
  const data =  apiFetch(`https://api.github.com/users/${username}/following`)
  const following = {
            'noOfFollowers':data.length,
            'followingUsername':data[0].login,
            'avatar' : data[0].avatar_url,
            'githubLink': data[0].html_url
          }
console.log(following)
  return (
    <section className="following-section">
        <h2 className="section-title">following (30)</h2>
        <Follow/>
    </section>
  )
}

export default Following
