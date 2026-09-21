import WorkClient from "./WorkClient";

export const metadata = {
  title: "Collaborations and Endeavours | The Roadsides",
  description: "Explore our on-ground impact: from waste segregation in Gurugram to UN Environment Programme recognitions and educational drives at Mount Carmel School.",
};

export default function WorkPage() {
  const initiatives = [
    {
      title: "Venture Day Gurgaon by Cohrrt",
      tag: "Ecosystem & Networking",
      desc: "April 2025. Participated in Venture Day, a curated knowledge-sharing platform bridging the gap between startup founders, investors, and business professionals. It was an incredible space to gain practical insights into the startup ecosystem, share our own journey with The Roadsides, and explore strategies for sustainable, meaningful growth through real, collaborative conversations.",
      img: "venture_day.png"
    },
    {
      title: "UNESCO Sustainability Event",
      tag: "Global Discourse",
      desc: "Our Founder, Seema Chowdhry Dhawan, participated in a high-level UNESCO event centered around sustainability, joining prominent thought leaders to discuss pressing environmental challenges and real-world solutions for a greener future.",
      img: "unesco_event.png"
    },
    {
      title: "Likhega India World Record",
      tag: "Recognition & Awards",
      desc: "Recognized by the Asia and World Records at the Likhega India Conclave for 'Baby Steps to Green Revolution', contributing to the historic mission of publishing the maximum number of books in a single day.",
      img: "likhega_india.jpg"
    },
    {
      title: "Mount Carmel 'Sociopreneur' Jury",
      tag: "Mentorship & Education",
      desc: "Invited to Mount Carmel School, Dwarka, as a jury member for 'Comonomics 4.0'. Watching class 7 and 8 students imagine real ideas for environmental change was genuinely inspiring. Two very different rooms recentlyone learning from our brightest young trailblazers, one sharing the spotlight with established voices. The future does look promising.",
      img: "mount_carmel.png"
    },
    {
      title: "DAV Institute of Management NSS Event",
      tag: "Awareness & Education",
      desc: "Partnered with the National Service Scheme (NSS) at the DAV Institute of Management in March 2026 for a dedicated awareness drive. We engaged with the student body to impart critical knowledge on waste management protocols and the broader importance of civic sense in maintaining healthy urban ecosystems.",
      img: "dav_institute_nss.jpg"
    },
    {
      title: "ISHRAE Gurugram Felicitation",
      tag: "Recognition & Awards",
      desc: "Honored by the ISHRAE Gurugram Chapter for our ongoing commitment to creating sustainable, green urban spaces and driving impactful community-level environmental action.",
      img: "ishrae_recognition.jpg"
    },
    {
      title: "Sarhaul Village, Gurugram Drives",
      tag: "Civic Sense & Waste Management",
      desc: "Executing targeted on-ground initiatives centered around waste segregation, meticulous management, and widespread civic sensitization. Empowering local communities to take charge of their immediate surroundings and actively report civic issues using the Swachhata App for sustainable urban transformation.",
      img: "sarhaul_5.jpg"
    },
    {
      title: "Ballabgarh & Faridabad Drives",
      tag: "Plantation & Nurturing",
      desc: "Going beyond just planting saplings to establishing a system of continued nurturing, in partnership with local community and environmental groups.",
      img: "founded_bg.jpg"
    }
  ];

  return <WorkClient initiatives={initiatives} />;
}
