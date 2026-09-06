import * as Avatar from "@radix-ui/react-avatar";

const avatarData = [
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "CT",
    imgURL: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "CT",
    imgURL:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
  {
    name: "CT",
    imgURL: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
  },
];
export default () => (
  <div className="w-[350px] flex flex-col">
    <div className="h-[70px] flex justify-between px-6 items-center border-b border-[#2a2a2a]">
      <h2 className="bg-[#fff]/5 text-[#fff] w-fit h-fit px-3 text-lg shadow-lg font-medium rounded-full border border-[#2a2a2a]">
        Members
      </h2>
      <h2 className="text-base text-[#8c8c8c]">4 Members</h2>
    </div>

    <div className="h-[130px] flex items-center justify-center -space-x-2">
      {avatarData.map((item, idx) => {
        return (
          <Avatar.Root
            key={idx}
            className="bg-white border-2 border-[#1c1c1c] h-10 w-10 flex items-center justify-center overflow-hidden rounded-full"
          >
            <Avatar.Image src={item.imgURL} className="object-cover" />
            <Avatar.Fallback delayMs={600}>{item.name}</Avatar.Fallback>
          </Avatar.Root>
        );
      })}
    </div>
  </div>
);
