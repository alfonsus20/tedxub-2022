import { motion } from "framer-motion";

const VolunteerLists = ({typeA, nameA, typeB, nameB}) => {
  return (
    <div className="px-10">
      <div className="flex flex-row flex-wrap justify-between items-start mb-10"> 
        <div>
          <div className="py-5 px-10 rounded-full border-main-1 border-2 w-fit mb-10 hover:bg-main-1 hover:text-main-2 duration-200">
            <h3 className="font-akira">{nameA}</h3>
          </div>
          <div className="flex flex-row w-fit">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0 0%"],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-3 flex-1 bg-gradient-to-b from-sec-1 via-sec-2 to-sec-3 bg-[length:300%_300%]"
            />
            <div className="flex flex-col gap-5">
              { typeA.map((a, idx) => {
                  return(
                    <div key={idx}>
                      <div className="flex flex-row items-center">
                        <div className="w-12 h-2 bg-main-1"/>
                        <div className="bg-main-1 w-96 h-24 text-main-2 text-center font-jakarta flex justify-center items-center rounded-xl">
                          <p>{a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="py-5 px-10 rounded-full border-main-1 border-2 w-fit mb-10 hover:bg-main-1 hover:text-main-2 duration-200">
            <h3 className="font-akira">{nameB}</h3>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col gap-5">
              { typeB.map((b, idx) => {
                  return (
                    <div key={idx} className="flex flex-col items-end">
                      <div className="flex flex-row items-center">
                        <div className="bg-main-1 w-96 h-24 text-main-2 text-center font-jakarta flex justify-center items-center rounded-xl">
                          <p>{b}</p>
                        </div>
                        <div className="w-12 h-2 bg-main-1"/>
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "0% 100%", "0 0%"],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-3 flex-1 bg-gradient-to-b from-sec-3 via-sec-2 to-sec-1 bg-[length:300%_300%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default VolunteerLists;