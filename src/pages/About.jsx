import background from "../assets/images/about/background.jpg";
import CarouselAbout from "../components/Carousel/About";


const About = () => {
  return (
    <div
      className="bg-[#353535] px-4 text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="max-w-screen-xl mx-auto space-y-12">
        <section>
          <h1 className="text-2xl font-sedgwick mb-8">
            About <span className="text-main-3">TEDxUniversitasBrawijaya</span>
          </h1>
          <p className="text-justify">
            Manusia dalam era kompleksitas atas modernitas yang tercipta hingga
            hari ini sejatinya memiliki sistem pengetahuan yang berangkat dari
            nilai fundamental kesadaran sosial dan karakteristik dari
            pencermatan keadaan sekitar yang terbangun melalui ekosistem
            interaksi antara manusia dan lingkungannya sejak awal. Kebijaksanaan
            lokal ini sering terkesampingkan atau bahkan hilang di tengah gegap
            gempita produktivitas dunia yang serba berkecepatan. Alih-alih
            bertanya pesatnya pembangunan disekitar kita, sudahkah kita bertanya
            apa yang kita cermati dari lingkungan yang berkembang pesat?
            Bagaimana kondisi diri kita dalam berpikir atas realitas terhadap
            kesadaran dan keadaan yang ada di luar?
          </p>
          <h2 className="text-center text-xl font-sedgwick my-6">
            Merayakan Kembali:{" "}
            <span className="text-main-3">Menggeledah Arus, Menilik Ruang</span>
          </h2>
          <p className="text-justify">
            TEDxUniversitasBrawijaya 2022 kali ini akan membawa penonton melalui
            perjalanan istirahat dari kejenuhan dan kompleksitas yang telah
            terbentuk dengan kembali menjelajahi makna nilai kearifan lokal
            sebagai ruang untuk kembali pada akar, mengambil bekal dalam
            menjalani era modernitas saat ini. Penelusuran ini sebagai pengingat
            kepada kita tentang menghayati, mencerna, dan berkesadaran secara
            total tentang nilai dasar tiap-tiap individu dan sekitarnya yang
            telah ada. Karena apa yang kita cemaskan pada masa kini,
            ketidakpastian akan masa depan, akan terjawab dengan kembali
            menelusuri makna masa lalu.
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-sedgwick mb-8">
            About <span className="text-main-3">TED</span>
          </h1>
          <div className="mb-8 flex flex-col md:flex-row gap-y-[4rem]">
            <div className="md:w-1/2 text-justify">
              <p className="mb-6">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
              <p>
                The annual TED Conference takes place each spring in Vancouver,
                British Columbia. TED's media initiatives include TED.com, where
                new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations
                from volunteers worldwide; the educational initiative TED-Ed.
                TED has established The Audacious Project that takes a
                collaborative approach to funding ideas with the potential to
                create change at thrilling scale; TEDx, which supports
                individuals or groups in hosting local, self- organized
                TED-style events around the world, and the TED Fellows program,
                helping world-changing innovators from around the globe to
                amplify the impact of their remarkable projects and activities.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center relative">
              <CarouselAbout />
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xl text-center font-sedgwick mb-8">
            About <span className="text-main-3">TEDx</span>
          </h1>
          <p className="text-center">
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
          </p>
        </section>
      </div>
    </div>
  );
};
export default About;
