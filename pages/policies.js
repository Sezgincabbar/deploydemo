import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PoliciesContainer from "../components/PoliciesContainer/PoliciesContainer";
import styles from "../public/css/policies.module.scss";
import { policiesData, policiesButton } from "../public/data/policies";

function Policies() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);
  return (
    <Layout>
      <section className="overview-block-ptb iq-bg iq-bg-fixed iq-over-black-80" style={{ backgroundImage: "url(images/banner/bg.jpg)" }}></section>
      <section id="policies" className={styles.body}>
        <div>
          <div className={styles.row}>
            <div className={styles.sidebar}>
              <ul>
                {policiesButton.map((item, index) => (
                  <li onClick={() => setActiveIndex(index)} id={index} key={index}>
                    <div className={index === activeIndex ? styles.active : ""} dangerouslySetInnerHTML={{ __html: item.title }}></div>
                  </li>
                ))}
              </ul>
            </div>
            {policiesData.map((item, index) => (
              <PoliciesContainer key={index} showContent={activeIndex === index ? true : false} content={item.content} style={styles.content} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Policies;
