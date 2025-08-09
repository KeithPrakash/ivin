import Image from "next/image";

const TrustCard = (props) => {
  const { title, desc, img } = props;
  return (
    <div
      data-aos="flip-up"
      className="border border-slate-500 backdrop-blur-lg  rounded-3xl p-5 md:p-7 items-center  flex flex-col gap-3 drop-shadow-2xl bg-white text-[#301f1f]"
    >
      <Image
        className="w-24 aspect-square  bg-slate-600 rounded-xl"
        src={img}
        alt="image"
      />
      <h3 className="font-semibold text-xl text-center">{title}</h3>

      <p className=" text-sm text-center ">{desc}</p>
    </div>
  );
};

export default TrustCard;
