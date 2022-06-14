import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import GithubIcon from "@site/static/icons/github.svg";
import TwitterIcon from "@site/static/icons/twitter.svg";
import LinkedInIcon from "@site/static/icons/linkedin.svg";
import YoutubeIcon from "@site/static/icons/youtube.svg";
import styles from "./styles.module.scss";

const CustomFooter = () => (
<footer className={styles["custom-footer-wrapper"]}>
  <div className={styles["logo-wrapper"]}>
    <img src={useBaseUrl("/img/logo-light.svg")} className={styles["dark-theme-logo"]} />
    <img src={useBaseUrl("/img/logo.svg")} className={styles["light-theme-logo"]} />
  </div>
  <div className={styles["copyright"]}>
    {`© ${new Date().getFullYear()} Sai Tai. All rights reserved`}
  </div>
  <div className={styles["footerSocialIconsWrapper"]}>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://github.com/saitai0802/"}
        rel="noopener noreferrer"
        aria-label={"Github"}
      >
        <GithubIcon />
      </Link>
    </div>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://twitter.com/SaiTai79438340"}
        rel="noopener noreferrer"
        aria-label={"Twitter"}
      >
        <TwitterIcon />
      </Link>
    </div>
    <div className={styles["socialBrands"]}>
      <Link
        href={"https://www.linkedin.com/in/saitai/"}
        rel="noopener noreferrer"
        aria-label={"Linkedin"}
      >
        <LinkedInIcon />
      </Link>
    </div>
  </div>
</footer>
);

export default CustomFooter;
