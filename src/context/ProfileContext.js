import { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';
import { getUser } from '../services/users';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { user } = getUser();
  const [profile, setProfile] = useState(
    name ? { name: '', email: '', bio: '', birthday: '' } : {}
  );

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getProfile();
      setProfile({
        email: userProfile.email,
        name: userProfile.name,
        birthday: userProfile.birthday,
        bio: userProfile.bio,
      });
    };
    fetchProfile();
  }, []);

  const value = { profile, setProfile };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be rendered within ProfileProverder');
  }
  return context;
};

export { ProfileProvider, ProfileContext, useProfile };
