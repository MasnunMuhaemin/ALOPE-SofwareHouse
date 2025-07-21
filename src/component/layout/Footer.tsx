import DiscordIcon from "../icons/DiscordIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";

const Footer = () => {
  return (
    <>
      <footer
        className="container mx-auto mt-20 flex flex-wrap gap-10 px-3 py-14 text-center md:px-8 lg:flex-nowrap lg:gap-5 lg:text-left xl:px-5 2xl:px-2"
        id="footer"
      >
        <div className="order-1 w-full text-center">
          <p className="text-3xl min-md:text-4xl font-bold">
            Alope Software House
          </p>
          <p className="my-3 text-sm lg:text-lg sm:text-lg">
            Kami hadir untuk bantu wujudkan solusi digital Anda!
          </p>
          <div className="text-center">
            <div className="mt-5 flex justify-center gap-4 text-gray-700">
              <DiscordIcon link="https://discord.gg/WV7wAdcp" />
              <InstagramIcon link="https://www.instagram.com/alope.world/" />
              <GithubIcon link="https://github.com/orgs/Alope-Community/dashboard" />
            </div>
            <p className="mt-4">&copy; 2025 Alope Software House</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
