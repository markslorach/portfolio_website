interface HeadingProps {
  children: any;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={`${className} text-5xl font-extrabold leading-none`}>
      {children}
    </h1>
  );
};

export default Heading;
