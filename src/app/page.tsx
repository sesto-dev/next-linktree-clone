import Image from "next/image";
import { LinkButton } from "./_components/link-button";

// This data would typically come from a database or CMS
const profile = {
  name: "گروه هنریا و گروه Taranet",
  bio: "فعال در بازار های مالی",
  avatar: "/logo.jpg",
  links: [
    {
      title: "خرید بلیط رویداد حضوری",
      url: "https://evand.com/events/algotrading-networking",
    },
    { title: "LinkedIn", url: "https://linkedin.com/company/henria" },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <Image
            src={profile.avatar || "/placeholder.svg"}
            alt={profile.name}
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
        <div className="space-y-4">
          {profile.links.map((link, index) => (
            <LinkButton key={index} href={link.url}>
              {link.title}
            </LinkButton>
          ))}
        </div>
      </div>
    </main>
  );
}
