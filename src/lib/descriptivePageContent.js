import * as styles from '../styles';
import * as assets from '../assets';

export const missionContent = {
  text: {
    first: "Hi, we're software engineers who want to help other software engineers get hired.",
    highlightedSection: "Why we're good: ",
    second:
      'We can properly vet candidates and effectively communicate their strengths to companies, as well as effectively match candidates with roles that correctly fit their skill set.',
    highlightedSectionTwo: 'Why else: ',
    third:
      "We focus on only a few clients at a time and we won't ever leave you hanging if something doesn't happen to go your way. We've got time for you!"
  },
  textSectionColor: styles.red,
  image: assets.resume,
  rowReverse: false
};

export const purposeContent = {
  text: {
    first:
      'We formed Last Key Recruiting after observing quite a large amount of good engineers struggling to find jobs.',
    second:
      'We have also noticed in our own careers and job searches, and through various reports from colleagues and other engineers, that most tech recruiters seem to have almost zero actual knowledge of the technology or role they are supposed to be recruiting for - ',
    highlightedText:
      'relying on buzz words and leaving the actual vetting process to the companies themselves.',
    third:
      'We think that we improve that process dramatically, saving people and companies time and money.'
  },
  textSectionColor: styles.yellow,
  image: assets.updatedResume,
  rowReverse: true
};

export const promiseContent = {
  text: {
    first:
      "Our process is simple: We put people first, and we take on clients who we would want to work with ourselves. We use techniques that we've already used to vet and hire candidates for various teams we've been on.",
    second:
      "We look at clients' past work in whatever format they want us to see it - looking through the repos and running the programs ourselves. We assess current skills through whatever means appropriate for their sought-after role. ",
    highlightedText: "We don't take a one-size-fits-all approach to any candidate.",
    third:
      "We try our best to get it right on the first try, but if for some reason things don't work out we will continue to work tirelessly to get you matched with another great company."
  },
  textSectionColor: styles.green,
  image: assets.onlineResume,
  rowReverse: false
};
