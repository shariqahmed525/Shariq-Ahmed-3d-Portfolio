import { useState, useEffect, useContext } from "react";
import * as yup from "yup";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useForm } from "react-hook-form";
import { RobotCanvas } from "./canvas/index";
import { DarkModeContext } from "./DarkModeProvider";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is require!"),
    email: yup.string().email("Invalid Email").required("Email is require!"),
    message: yup.string().required("Message is require!"),
  })
  .required();

const Label = ({ label }: { label: string }) => (
  <span className="text-gray-500 dark:text-gray-400 font-medium mb-4">
    {label}
  </span>
);

const ErrorMessage = ({ error }: { error: string | null | undefined }) =>
  !!error && (
    <p className="text-red-800 mt-1.5 ml-1 text-[14px] mb-0">{error}</p>
  );

const cls =
  "bg-gray-200 dark:bg-black py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-gray-600 text-c-black dark:text-gray-200 rounded-lg outline-none border-none font-normal";

const Contact = () => {
  const { isDark } = useContext(DarkModeContext);
  const [showRobot, setShowRobot] = useState(true);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    emailjs
      .send(
        "service_t5mas3d",
        "template_1f14c0a",
        {
          message,
          from_name: name,
          from_email: email,
        },
        "FATmBmTxoNpMmfKVx"
      )
      .then(() => {
        toast.success(
          "Your message has been sent successfully! You will be responded shortly."
        );
        reset();
      })
      .catch(() => {
        toast.error(
          "There was an error sending your message. Please try again."
        );
      });
    setIsSubmitting(false);
  };

  useEffect(() => {
    setShowRobot(false);
    setTimeout(() => {
      setShowRobot(true);
    }, 100);
  }, [isDark]);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        // @ts-expect-error
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-c-white dark:bg-light-black p-8 rounded-2xl"
      >
        <h2 className={`${styles.sectionHeadText} text-center md:text-left`}>
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <Label label={"Name"} />
            <input
              type="text"
              className={cls}
              disabled={isSubmitting}
              placeholder="What's your name?"
              {...register("name", { required: true })}
              aria-invalid={errors?.name ? "true" : "false"}
            />
            <ErrorMessage error={errors?.name?.message} />
          </label>
          <label className="flex flex-col">
            <Label label={"Email"} />
            <input
              type="email"
              className={cls}
              disabled={isSubmitting}
              placeholder="What's your email address?"
              {...register("email", { required: true })}
              aria-invalid={errors?.email ? "true" : "false"}
            />
            <ErrorMessage error={errors?.email?.message} />
          </label>
          <label className="flex flex-col">
            <Label label={"Message"} />
            <textarea
              rows={7}
              className={cls}
              disabled={isSubmitting}
              placeholder="What do you want to say?"
              {...register("message", { required: true })}
              aria-invalid={errors?.message ? "true" : "false"}
            />
            <ErrorMessage error={errors?.message?.message} />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className=" bg-secondary w-full py-4 px-8 rounded-xl outline-none text-c-white font-bold shadow-md"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        // @ts-expect-error
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {showRobot && <RobotCanvas />}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact);
