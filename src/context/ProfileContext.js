import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const userProfile = getProfile();
  const { name, email, bio, birthday } = userProfile;
  const [profile, setProfile] = useState(
    name ? { name: name, email: email, bio: bio, birthday: birthday } : {}
  );

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
