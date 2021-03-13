import Link from 'next/link';

interface Props {
  children: React.ReactElement;
}

const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div>Default Layout</div>
      <Link href="/">Go to Index Page</Link>
      <div>{children}</div>
    </>
  );
};

export default DefaultLayout;
