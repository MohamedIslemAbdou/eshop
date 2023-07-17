import React from "react";
import css from "./layer2.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const layer2 = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.L2LeftSide}>
        {/* text1 */}
        <span className={css.text1}>skin protection cream</span>
        {/* text2 */}
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoice.
          </span>
        </div>
      </div>
      {/* middle side Layer2 */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ left: "0rem" }}
          whileInView={{ left: "-2rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ left: "-2rem" }}
          whileInView={{ left: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "-2%" }}
          whileInView={{ right: "-5%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* right side layer2 */}
      <div className={css.rightSide}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default layer2;
