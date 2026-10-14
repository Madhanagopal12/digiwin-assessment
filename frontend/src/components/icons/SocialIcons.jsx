import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";
import YouTube from "../../assets/icons/youtube.svg?react";

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  youtube: YouTube,
};

export default function SocialIcon({ platform, size = 24, className = "" }) {
  const Icon = icons[platform.toLowerCase()];

  if (!Icon) {
    console.warn(`Unknown social icon: ${platform}`);
    return null;
  }

  return <Icon width={size} height={size} className={className} />;
}
