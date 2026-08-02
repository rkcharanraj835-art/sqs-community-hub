import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileTabs from "../components/ProfileTabs";

function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#05070D] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <ProfileHeader />

        <ProfileStats />

        <ProfileTabs />
      </div>
    </main>
  );
}

export default ProfilePage;