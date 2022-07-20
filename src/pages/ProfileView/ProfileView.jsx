
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hangover from '../../components/Hangover/Hangover'
import { getProfile } from '../../services/profileService'

const ProfileView = (props) => {
  const [ profileDetails, setProfileDetails ] = useState({})
  const location = useLocation()
  const profile = location.state.profile
  console.log(profile)
  
  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfile(profile._id)
      setProfileDetails(profileData)
    } 
    fetchProfileDetails()
  }, [profile])
  console.log(profileDetails)
  return (
    <>
    <h1>Do you have a hangover?</h1>
      {profile.hangoverTip.map(hangoverTip => 
        <>
        <Hangover 
          user={props.user}
          profiles={props.profiles}
          key={hangoverTip._id} 
          hangoverTip={hangoverTip}
          profileDetails={profileDetails}
          handleDeleteTip={props.handleDeleteTip}
        />
      </>
      )}
    </>
  )
}
export default ProfileView