
import Image from "next/image";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  return (
    <section className="px-8 py-28 bg-[url(/devBg.svg)] bg-center bg-fixed">
      <div className="container mx-auto text-center">
        <div className="mb-8 text-zinc-100 text-4xl " >
          <h6 className="">My previous<span className="text-teal-400"> clients</span></h6>  
            
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40 grayscale hover:grayscale-0 transition duration-300"
              src={`/logos/logo-${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
