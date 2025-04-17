import { on } from "events";
import EventCard from "./EventCard";

const EventList = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 px-20">
      <h2 className="text-3xl lg:text-4xl mb-10">Upcoming Events</h2>
      <div className="flex flex-wrap gap-8">
        {events.upcoming.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      
      <h2 className="text-3xl lg:text-4xl mb-10 mt-20">Ongoing Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {events.ongoing.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    
      <h2 className="text-3xl lg:text-4xl mb-10 mt-20">Past Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {events.past.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const events = {
  upcoming: [
    {
      title: "GDG WOW 2025",
      date: "2025-04-19",
      description: "GDG WOW 2025 empowers women in tech through inspiring talks, workshops, and networking. It’s a global event fostering diversity, innovation, and collaboration in the tech community.",
      details: "GDG WOW 2025 is a flagship event organized by the Google Developer Group to celebrate and empower women in technology. It brings together female developers, entrepreneurs, and technologists from across the globe to foster collaboration, innovation, and mentorship in the tech community. This year's theme focuses on \"Empowering Women Through Technology\" and provides a platform for women to showcase their work, share knowledge, and build meaningful connections",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FeixBdeiTgHX5AL44nQ4X%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3Dd4c8d3ab-6b3c-474a-aa8c-ceaee3f8ccc3&w=1920&q=75",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Keynote Speakers\nHands-on Workshops\nPanel Discussions\nNetworking Opportunities\nTech Demos\nCareer Development",
    },
  ],
  ongoing: [
    {
      title: "Google Cloud Arcade",
      description: "Google Cloud Arcade 2025 is an interactive event offering hands-on workshops, expert talks, and demos to explore the latest in Google Cloud technology.",
      image: "data:image/jpeg;base64,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",
      details: "Google Cloud Arcade 2025 is an exciting, interactive event that brings together cloud enthusiasts, developers, and tech professionals to explore the latest advancements in Google Cloud technologies. The event is designed to provide hands-on experiences, real-world case studies, and expert-led sessions to help attendees level up their cloud skills. Whether you're a beginner or a cloud expert, Google Cloud Arcade offers something for everyone",
      date: "1/04/2025",
      location: "MIT World Peace University (MIT-WPU), Pune",
      locate: "https://www.google.com/maps/place/MIT+World+Peace+University+(MIT-WPU)/@18.5177559,73.8125363,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bfb9e53a05f9:0x2be5e8da02be693e!8m2!3d18.5177559!4d73.8151112!16s%2Fm%2F04d_4lg?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
      overview: "",
    },
  ],

  past: [
    {
      title: "GDSC Embark",
      date: "2025-03-25",
      description: "GDSC EMBARK at MITWPU introduces students to Google Developer Student Clubs, covering both tech and non-tech aspects.",
      details: "Welcome to GDSC EMBARK 2024! This event isn't just a gathering; it's the start of something transformative. At GDSC-MITWPU, we believe in igniting the passion for learning new skills and making sure that everyone who joins us is equipped with the right tools to succeed. Our community is more than just a collection of individuals; it’s a thriving ecosystem where the best minds come together, driven by a shared hunger to learn and a determination to make an impact.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FPRZ7Qk90T8BkAnK0DMga%252Fbanner_1.webp%3Falt%3Dmedia%26token%3D29647ef3-46d2-4f3f-acb1-b905cacdd654&w=1920&q=75",
      location: "Swami Vivekananda Auditorium, 9 Vishwashanti Marg, Pune, 411038",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Intro to GDSC\nOverview of the club's structure, goals, and activities\nDepartmental Insights\nRapid Networking Session\nConclusion and Networking",
    },

    {
      title: "GDSC WOW 2024",
      description: "The GDSC WOW (Wonder of Wonders) event on March 18th, 2024, brought together 30+ GDSCs across Pune for a collaborative experience.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FeixBdeiTgHX5AL44nQ4X%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3Dd4c8d3ab-6b3c-474a-aa8c-ceaee3f8ccc3&w=1920&q=75",
      details: "Students, developers, and communities united under one roof to explore a range of technologies. The event featured hands-on activities, lightning talks, and networking opportunities with tech experts, fostering knowledge sharing and community building. The event was a huge success, attracting a remarkable turnout and generating overwhelming positivity and praise from participants. The vibrant atmosphere and enthusiastic engagement highlighted the thriving tech culture and community spirit.",
      date: "18/03/2024",
      location: "Swami Vivekananda Auditorium, Pune",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Talks\nHands-on\nNetworking",
    },
    {
      title: "Byte Me",
      description: "AI/ML Workshop provided students with comprehensive insights into cutting-edge Google technologies and the latest advancements in Artificial Intelligence.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FNiXVvtVecv5F1PHsyJ8k%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D681999a5-4055-4aa3-81d8-0879b759839d&w=1920&q=75",
      details: "AI/ML Workshop provided an immersive exploration into the forefront of Google technologies and AI advancements. Beginning with fundamental Machine Learning principles and progressing to cutting-edge innovations like Gemini, attendees gained insights into various AI algorithms and their applications. The event highlighted emerging technologies such as Vertex AI, AI Studio, and Duet AI, offering a glimpse into their potential. Interactive elements like technical quizzes and the Imagination Challenge added depth, while the networking session fostered connections and reflection.",
      date: "18/03/2024",
      location: "Swami Vivekananda Auditorium, Pune",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "API and Model First Focus\nMachine Learning and algorithms\nQuiz- 1\nNeural Networks\nGoogle's AI/ML Libraries\nQuiz- 2\nGoogle’s AI/ML products\nGemini\nVertex AI\nAI Studio\nExploiting LLM\nDuet AI\nQnA Session",
    },
    {
      title: "Cloud Native Day Pune",
      description: "A comprehensive event exploring cutting-edge cloud technologies through discussions and workshops.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252F2GUHBHE2NmGQ3mSCP41Y%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D9d6ef87b-b3c0-4710-98c3-c89e43e19c58&w=1920&q=75",
      details: "Cloud Native Day Pune was an exceptional event boasting over 20 speakers who delved into diverse cloud topics ranging from Kubernetes to Docker, providing attendees with a comprehensive overview of contemporary cloud technologies. Spanning six hours, the event facilitated extensive learning opportunities and offered a platform for networking and staying abreast of the latest technological advancements. The event was organized in partnership with Cloud Native Day Pune, enriching the experience with industry expertise and community engagement.",
      date: "18/03/2024",
      location: "Swami Vivekananda Auditorium, Pune",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Rocky Bhatia (Adobe) The Art of Algorithms: How Generative AI Transforms Lives\nGiriraj Daga (Affinidi) Mastering Identity Management & Passwordless authentication using Open Standards\nUtkarsh Sharma (Google) Journey with Anthos and GKE Enterprise\nKaranveer Singh (Stratacent) Unlocking new value chain: Embedded lending\nDr. Rajani Sajjan (MIT) Dr. Rahul Gaikwad (AWS) Vishal Alhat (Forcepoint) Panel Discussion\nDheeraj Choudhary (EPAM Systems) Mastering OpenSearch: A Comprehensive Guide\nHrittik Roy (Loft Labs) Virtual Kubernetes Clusters: A New Approach to Multi-tenancy kubernetes, DevOps\nRohan Shah and Sudharma Mokashi (Google) Solving Real-World Problems with Generative AI on Google Cloud Databases",
    },
    {
      title: "Embark",
      description: "GDSC Embark, held on 23rd August, 2023, was an informative orientation delving into the club structure, activities, and functioning.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FEmafGbyDesAdy9V2KFR4%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D312ce91c-f0bc-4234-a270-34ad75e951af&w=1920&q=75",
      details: "On August 23rd, 2023, GDSC organized Embark, a helpful orientation session introducing the club's structure, activities, and operations. Department heads shared their respective roles and contributions. Attendees had the chance to network and make new connections through the rapid networking session. A live screening of the Chandrayaan mission added excitement and unity. With over 800 attendees, Embark was a hit, receiving lots of positive feedback.",
      date: "18/03/2024",
      location: "Swami Vivekananda Auditorium, Pune",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Introduction to GDSC\nOverview of the club's structure, goals, and activities\nDepartmental Insights\nRapid Networking Session\nChandrayaan Mission Screening\nConclusion and Networking",
    },
    {
      title: "GDSC WoW",
      description: "With over 35 GDSCs, 100 volunteers and 800 participants, we hosted the biggest collaborative tech event of the year.",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252FeixBdeiTgHX5AL44nQ4X%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3Dd4c8d3ab-6b3c-474a-aa8c-ceaee3f8ccc3&w=1920&q=75",
      details: "Organized by 35+ GDSCs across pune and hosted in MITWPU, GDSC Wonders of Wonder stayed true to its name. We saw talks on a wide range of technologies and networking with like-minded individuals from almost every engineering college in Pune. The event included keynote talks, hands-on activities, and sessions on various topics",
      date: "18/03/2024",
      location: "Swami Vivekananda Auditorium, Pune",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Keynote by Karthik Padmanabhan\nKeynote by Nikita Gandhi\nBuilding Web Solutions by Vrijraj Singh\nZero to ChatGPT by Yogesh Kulkarni\nPlacement preparation panel discussion\nBuilding career in Data Technologies by Murari Ramuka\nLearn Devops by Udayendu Kar\nMicroservices demystified by Sangeeta Gupta\nStandup comedy by Purvi Toshniwal\nStandup comedy by Atharva Pawar (Vadapav)\nAll about AR by Faizan Akhtar\nKickstart Flutter by Shree Bhagwat\nFlutterFlow by Pooja Bhaumik\nPower of Bootstrap by Asit Sonawane",
    },
    {
      title: "Inauguration",
      description: "Having an exhilarated audience as witnesses, your friendly neighbourhood tech club announced its arrival with a bang!",
      image: "https://gdscmitwpu.tech/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fofficial-website-prod-1a724.appspot.com%2Fo%2Fevents%252F06zrk8YHPE5MRmhRh0OH%252Fbanner_1.jpeg%3Falt%3Dmedia%26token%3D0192e172-16ec-4abe-842b-e6dfed57d230&w=1920&q=75",
      details: "On 6th February 2023, GDSC MITWPU sparked countless techies by introducing them to the club and its motives. The attendees were introduced to the admin panel through keynote speeches.The event proved to be an ignition for innovation, learning and the future of technology.",
      date: "18/03/2024",
      location: "Swami Vivekananda Auditorium, Pune",
      locate: "https://goo.gl/maps/QSmSL9QRLMfg8UDS9",
      overview: "Speech by Prof. Dr. Shubhalaxmi Joshi (Associate Dean, Faculty of Science)\nSpeech by Dr. Sumegh Tharewal (Program Head M.Sc Blockchain)\nSpeech by Harshal Juikar (President)\nSpeech by Khushi Patil (Vice-President)\nSpeech by Speech by Shivam Deshmukh (Treasurer)\nSpeech by Ritika Ojha (Core member)",
    },
  ],
};

export default EventList;
