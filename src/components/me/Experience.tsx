import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import { mePage } from "@db";

const Experience = () => {
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
            <th className="text-start p-2 border-b border-gray-500">
              Position
            </th>
            <th className="text-start p-2 border-b border-gray-500">Company</th>
          </tr>
        </thead>
        <tbody>
          {mePage.experience.map((item) => (
            <tr key={item.company}>
              <td className="text-start p-2 border-b border-gray-500">
                {item.position}
              </td>
              <td className="text-start p-2 border-b border-gray-500">
                {item.company}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Experience;
