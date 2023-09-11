const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center bg-secondary-color bg-opacity-90 text-center text-light-color min-h-[4rem] w-[100vw] fixed bottom-0"
      style={{ zIndex: 999 }}
    >
      <p className="p-5 text-lg font-medium">&copy; 2023 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
