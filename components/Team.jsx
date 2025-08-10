import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: "Dilshaad Uzair",
    position: "Founding Member",
    image: "/img/team/dilshaad.jpg", 
    linkedinUrl: "https://linkedin.com/in/johndoe"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Founding Member",
    image: "/img/team/prateek.jpg",
    linkedinUrl: "https://linkedin.com/in/janesmith"
  },
  {
    id: 3,
    name: "Insha Manowar",
    position: "Founding Member",
    image: "/img/team/insha.jpg",
    linkedinUrl: "https://linkedin.com/in/mikejohnson"
  },
  {
    id: 4,
    name: "Amulya Kollipara",
    position: "Founding Member",
    image: "/img/team/amulya.jpg",
    linkedinUrl: "https://linkedin.com/in/sarahwilson"
  },
  {
    id: 5,
    name: "Manorath Khanna",
    position: "Founding Member",
    image: "/img/team/manorath.jpg",
    linkedinUrl: "https://linkedin.com/in/sarahwilson"
  }
];

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
          <Image
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-2 right-1/2 transform translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={`${member.name}'s LinkedIn Profile`}
        >
          <FaLinkedin className="w-4 h-4" />
        </a>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-primary font-medium">{member.position}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Diverse Team brings together Expertise, Creativity, and Passion to Deliver Exceptional Results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
