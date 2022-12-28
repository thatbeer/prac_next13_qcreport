import Subnavbar from "../../components/Subnavbar";

export default function SubLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
    <section>
      <div className='fixed w-screen z-30 '>
        {/* <div className="pt-[50px]">
            <Subnavbar />

        </div> */}
      </div>
      {children}
    </section>
      );
}