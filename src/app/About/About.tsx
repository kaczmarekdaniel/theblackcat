import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();
	return (
		<motion.div
			className="flex flex-col px-6 pt-20 "
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<h1 className="text-white text-5xl font-regular font-sans">
				{t("about.heading")}
			</h1>

			<p className="mt-6">{t("about.paragraph")}</p>
		</motion.div>
	);
};

export default About;
