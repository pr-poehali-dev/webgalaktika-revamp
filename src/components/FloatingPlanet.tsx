interface FloatingPlanetProps {
  color: string;
  size: number;
  x: number;
  y: number;
  delay: number;
}

export const FloatingPlanet = ({ color, size, x, y, delay }: FloatingPlanetProps) => {
  return (
    <div
      className="absolute rounded-full blur-3xl opacity-20 animate-float-planet"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, ${color}, transparent)`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};
