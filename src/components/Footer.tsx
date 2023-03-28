function Footer() {
  return (
    <div className=" col-start-2 col-end-3 ">
      <main className="col-start-2 col-end-3 flex items-center justify-between my-10">
        <p className="text-gray200 text-xs">
          © 2022, Made with ❤️ by{" "}
          <span className="cursor-pointer text-cyan font-bold">Tektorch</span>{" "}
          for a better web
        </p>
        <ul className="flex gap-7 text-gray200 text-xs">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Privacy</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">License</li>
        </ul>
      </main>
    </div>
  );
}

export default Footer;
