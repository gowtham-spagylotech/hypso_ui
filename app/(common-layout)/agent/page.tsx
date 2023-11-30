import SubHeadingBtn from "@/components/SubHeadingBtn";
import AgentCard from "@/components/home-1/AgentCard";
import Faq from "@/components/home-1/Faq";
import Cta from "@/components/home-4/Cta";

const agentData = [
  {
    id: 1,
    name: "Floyd Miles",
    img: "/img/team-1.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 2,
    name: "Neelah Behnam",
    img: "/img/team-2.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    img: "/img/team-3.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 4,
    name: "Hajdu Dominika",
    img: "/img/team-4.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 5,
    name: "Denny Myers",
    img: "/img/team-5.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 6,
    name: "Jorge Price",
    img: "/img/team-6.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 7,
    name: "Ava Rose",
    img: "/img/team-7.jpg",
    address: "775 Rolling Green Rd.",
  },
  {
    id: 8,
    name: "Dianne Busby",
    img: "/img/team-8.jpg",
    address: "775 Rolling Green Rd.",
  },
];

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="py-[60px] lg:py-[120px] px-3">
        <div className="container">
          <div className="max-w-[630px] mx-auto flex flex-col items-center text-center">
            <SubHeadingBtn
              text="Expert Agents"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-3">Meet Our Experienced Agents</h2>
            <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
              Real estate can be bought, sold, leased, or rented, and can be a
              valuable investment opportunity. The value of real estate can
              be...
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {agentData.map((agent) => (
              <div
                key={agent.id}
                className="col-span-12 md:col-span-4 lg:col-span-3">
                <AgentCard item={agent} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
      {/* Faq */}
      <Faq />
    </section>
  );
};

export default page;
