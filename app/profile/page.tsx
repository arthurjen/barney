import { Metadata } from "next";
import ProfileClient from './profile-client';

export const metadata: Metadata = {
  title: "Profile",
};
export default function Profile() {
  return <ProfileClient />;
}
