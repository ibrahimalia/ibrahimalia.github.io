import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import { mePage } from "@db";

const Certificate = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <table className="w-full text-xs table-auto  uppercase text-gray-400">
        <thead>
          <tr className=" rounded-xl">
            <th className="text-start p-2 border-b border-gray-500">Name</th>
            <th className="text-start p-2 border-b border-gray-500">source</th>
          </tr>
        </thead>
        <tbody>
          {mePage.certificate.map((item) => (
            <tr key={item.name}>
              <td className="text-start p-2 border-b border-gray-500">
                {item.name}
              </td>
              <td className="text-start p-2 border-b border-gray-500">
                {item.source}
                {item.link && (
                  <a
                    className="text-accent pl-2 underline"
                    target="_blank"
                    href={`${item.link}`}
                  >
                    link here
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Certificate;
