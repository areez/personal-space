"use client";

import styles from "./ParticleEffect.module.scss";

export const ParticleEffect: React.FC = () => {
  return (
    <div className={styles.particleContainer}>
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} className={styles.particle} />
      ))}
    </div>
  );
};

export default ParticleEffect;