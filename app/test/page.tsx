import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Users from "@/components/userComponent/users";

export default function User() {
  return (
    <>
      <main className="bg-[url('../public/assets/particles.png')] w-full min-h-screen flex justify-center bg-cover bg-center bg-no-repeat font-space">
        <section className="bg-cover bg-no-repeat xl:border-l-[1px] xl:border-r-[1px] xl:border-x-blue-500 bg-[#10100E] xl:shadow-glow-sides w-full max-w-full xl:max-w-[820px]">
          <NavBar />
          <Users />
          <Footer />
        </section>
      </main>
    </>
  );
}
