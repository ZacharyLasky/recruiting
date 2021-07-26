import * as styles from "../styles";
import * as assets from "../assets";

export const missionContent = {
  text: {
    first:
      "We are full time software engineers who will properly interview candidates and effectively communicate their strengths and if they will be a great fit for a role.",
    second:
      "We strive to speed up the hiring process so candidates and companies can spend more time on development.",
    third:
      "Our entire goal is to quickly help get the right person to the right company."
  },
  textSectionColor: styles.red,
  image: assets.resume,
  rowReverse: false
};

export const purposeContent = {
  text: {
    first:
      "We formed Last Key Recruiting after seeing a noticeable amount of good engineers struggling to land good roles.",
    second:
      "We attribute this problem to there not being enough care, personal attention, and qualified peronsonnel during the recruitment process.",
    third: `To help solve this problem, we take a "people first" approach, only taking on a few clients at a time, personally interviewing them, focusing on their software abilities and attitude.`
  },
  textSectionColor: styles.blue,
  image: assets.updatedResume,
  rowReverse: true
};

export const promiseContent = {
  text: {
    first:
      "We'll be transparent throughout the whole process and give ample feedback.",
    second:
      "We know how it feels to go through an interview or hiring process and hear nothing back.",
    third:
      "We will do our best to place candidates with the right companies and communicate why it may or may not be the right fit."
  },
  textSectionColor: styles.yellow,
  image: assets.onlineResume,
  rowReverse: false
};
