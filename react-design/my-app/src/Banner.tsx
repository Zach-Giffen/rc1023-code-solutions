interface BannerProps {
  word: string;
}

export function Banner({ word }: BannerProps) {
  return <h1>{word}</h1>;
}
